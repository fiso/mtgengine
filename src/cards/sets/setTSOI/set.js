"use strict";
module.exports = {
  Angel: require("./Angel"),
  ArlinnKordEmblem: require("./ArlinnKordEmblem"),
  Clue: require("./Clue"),
  Devil: require("./Devil"),
  HumanCleric: require("./HumanCleric"),
  HumanSoldier: require("./HumanSoldier"),
  Insect: require("./Insect"),
  JaceUnravelerofSecretsEmblem: require("./JaceUnravelerofSecretsEmblem"),
  Ooze: require("./Ooze"),
  ShadowsOverInnistradChecklist1: require("./ShadowsOverInnistradChecklist1"),
  ShadowsOverInnistradChecklist2: require("./ShadowsOverInnistradChecklist2"),
  Spirit: require("./Spirit"),
  VampireKnight: require("./VampireKnight"),
  Wolf: require("./Wolf"),
  Zombie: require("./Zombie")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTSOI = module.exports;}