"use strict";
module.exports = {
  AngelicSkirmisher: require("./AngelicSkirmisher"),
  AngelofGlorysRise: require("./AngelofGlorysRise"),
  AtarkaWorldRender: require("./AtarkaWorldRender"),
  BrionStoutarm: require("./BrionStoutarm"),
  BristlingHydra: require("./BristlingHydra"),
  BroodmateDragon: require("./BroodmateDragon"),
  FelidarSovereign: require("./FelidarSovereign"),
  GenesisHydra: require("./GenesisHydra"),
  HamletbackGoliath: require("./HamletbackGoliath"),
  JayaBallardTaskMage: require("./JayaBallardTaskMage"),
  KnightExemplar: require("./KnightExemplar"),
  OutlandColossus: require("./OutlandColossus"),
  RetaliatorGriffin: require("./RetaliatorGriffin"),
  SunblastAngel: require("./SunblastAngel"),
  Terastodon: require("./Terastodon"),
  ThaliasLancers: require("./ThaliasLancers"),
  XathridNecromancer: require("./XathridNecromancer")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPRES = module.exports;}