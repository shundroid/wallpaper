var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

if (process.platform === "darwin") {
  app.dock.hide();
}

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("ready", function() {
  var screen = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: screen.width,
    height: screen.height,
    type: "desktop",
    frame: false
  });
  mainWindow.setPosition(0, 0);
  mainWindow.loadURL("file://" + __dirname + "/index.html");

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
