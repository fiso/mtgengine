"use strict";
module.exports = {
  Bribery: require("./Bribery"),
  CrucibleofWorlds: require("./CrucibleofWorlds"),
  Genesis: require("./Genesis"),
  Golem: require("./Golem"),
  ImperialRecruiter: require("./ImperialRecruiter"),
  OverwhelmingForces: require("./OverwhelmingForces"),
  ShowandTell: require("./ShowandTell"),
  SwordstoPlowshares: require("./SwordstoPlowshares"),
  Vindicate: require("./Vindicate")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setJ13 = module.exports;}