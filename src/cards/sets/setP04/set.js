"use strict";
module.exports = {
  Angel: require("./Angel"),
  Beast: require("./Beast"),
  Myr: require("./Myr"),
  Pentavite: require("./Pentavite"),
  PowderKeg: require("./PowderKeg"),
  Spirit: require("./Spirit")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP04 = module.exports;}