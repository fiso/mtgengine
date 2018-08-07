"use strict";
module.exports = {
  Avatar: require("./Avatar"),
  Beast: require("./Beast"),
  Bird: require("./Bird"),
  Ooze: require("./Ooze"),
  Ooze: require("./Ooze"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTM11 = module.exports;}