"use strict";
module.exports = {
  BullElephant: require("./BullElephant"),
  DarkPrivilege: require("./DarkPrivilege"),
  KingCheetah: require("./KingCheetah"),
  Necrosavant: require("./Necrosavant"),
  Ovinomancer: require("./Ovinomancer"),
  PeaceTalks: require("./PeaceTalks"),
  UrborgMindsucker: require("./UrborgMindsucker"),
  Vampirism: require("./Vampirism"),
  ViashinoSandstalker: require("./ViashinoSandstalker"),
  WickedReward: require("./WickedReward")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setMGB = module.exports;}