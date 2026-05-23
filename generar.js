try {
  const fs = require("fs");
  const path = require("path");
  const Handlebars = require("handlebars");

  const location = process.argv[2];
  let data = require("./data.json");

  if (parseFloat(process.argv[3])>0) {
    console.log("Activado el modo de video")
    const videoDir = path.join(location, "static");
    const videos = fs
      .readdirSync(videoDir)
      .filter((file) => file.endsWith(".mp4"));

    data = { ...data, listaVideos: JSON.stringify(videos), intermission:parseFloat(process.argv[3])};
  }

  //const location = "D:/Programas/Xampp/htdocs/bar/index.html"
  //const location = "V:/Win/VERECF/WDesktop/MenuDigitalChanceBar/public/index.html"

  const source = fs.readFileSync("plantilla.hbs", "utf8");

  const template = Handlebars.compile(source);

  const html = template(data);

  fs.writeFileSync(location + "index.html", html);

  console.log(`Página actualizada correctamente en ${location}`);
} catch (err) {
  console.log("Ocurrió un error inesperado");
  console.log(`Detalles: ${err}`);
}
