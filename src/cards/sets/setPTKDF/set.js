"use strict";
module.exports = {
  DragonFodder: require("./DragonFodder"),
  DragonlordsServant: require("./DragonlordsServant"),
  EvolvingWilds: require("./EvolvingWilds"),
  FoeRazerRegent: require("./FoeRazerRegent")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPTKDF = module.exports;}