"use strict";
module.exports = {
  Corrupt: require("./Corrupt"),
  Damnation: require("./Damnation"),
  Harmonize: require("./Harmonize"),
  Incinerate: require("./Incinerate"),
  ManaTithe: require("./ManaTithe"),
  Ponder: require("./Ponder"),
  Tidings: require("./Tidings")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP08 = module.exports;}