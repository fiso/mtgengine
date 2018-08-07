"use strict";
module.exports = {
  Desert: require("./Desert"),
  EternalWitness: require("./EternalWitness"),
  IsochronScepter: require("./IsochronScepter"),
  Pendelhaven: require("./Pendelhaven"),
  Remand: require("./Remand"),
  Resurrection: require("./Resurrection"),
  SerratedArrows: require("./SerratedArrows"),
  ShrapnelBlast: require("./ShrapnelBlast"),
  TendrilsofAgony: require("./TendrilsofAgony"),
  ThirstforKnowledge: require("./ThirstforKnowledge"),
  TormodsCrypt: require("./TormodsCrypt"),
  WallofRoots: require("./WallofRoots")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF08 = module.exports;}