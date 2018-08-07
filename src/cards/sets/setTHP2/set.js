"use strict";
module.exports = {
  TheExplorer: require("./TheExplorer"),
  TheGeneral: require("./TheGeneral"),
  TheProvider: require("./TheProvider"),
  TheSavant: require("./TheSavant"),
  TheTyrant: require("./TheTyrant"),
  TheVanquisher: require("./TheVanquisher"),
  TheWarmonger: require("./TheWarmonger")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTHP2 = module.exports;}