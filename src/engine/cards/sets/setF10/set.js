"use strict";
module.exports = {
  Anathemancer: require("./Anathemancer"),
  AncientZiggurat: require("./AncientZiggurat"),
  BloodbraidElf: require("./BloodbraidElf"),
  Cloudpost: require("./Cloudpost"),
  ElvishVisionary: require("./ElvishVisionary"),
  GatekeeperofMalakir: require("./GatekeeperofMalakir"),
  GhostlyPrison: require("./GhostlyPrison"),
  KrosanGrip: require("./KrosanGrip"),
  QasaliPridemage: require("./QasaliPridemage"),
  RiftBolt: require("./RiftBolt"),
  TidehollowSculler: require("./TidehollowSculler"),
  WildNacatl: require("./WildNacatl")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF10 = module.exports;}