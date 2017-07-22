var ffi = require("ffi");
var user32 = ffi.Library("kernel32", {
  "GetTickCount": ["long", []]
});

console.log(user32.GetTickCount());
