"use strict";
module.exports = {
  Carnophage: require("./Carnophage"),
  Fireblast: require("./Fireblast"),
  Impulse: require("./Impulse"),
  JackalPup: require("./JackalPup"),
  Ophidian: require("./Ophidian"),
  QuirionRanger: require("./QuirionRanger"),
  SwordstoPlowshares: require("./SwordstoPlowshares")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF01 = module.exports;}