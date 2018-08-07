"use strict";
module.exports = {
  AntQueen: require("./AntQueen"),
  HonorofthePure: require("./HonorofthePure"),
  MycoidShepherd: require("./MycoidShepherd"),
  NayaSojourners: require("./NayaSojourners"),
  VampireNocturnus: require("./VampireNocturnus")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPM10 = module.exports;}