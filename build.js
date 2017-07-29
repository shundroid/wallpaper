var packager = require('electron-packager');
var rebuild = require('electron-rebuild');
packager({
  dir: './',
  arch: 'x64',
  electronVersion: '1.6.2',
  overwrite: true,
  afterCopy: [(buildPath, electronVersion, platform, arch, callback) => {
    rebuild.default(buildPath, electronVersion, arch)
      .then(() => callback())
      .catch((error) => callback(error));
  }]
}, () => {});
