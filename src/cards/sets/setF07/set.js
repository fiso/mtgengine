"use strict";
module.exports = {
  BaskingRootwalla: require("./BaskingRootwalla"),
  CabalCoffers: require("./CabalCoffers"),
  DeepAnalysis: require("./DeepAnalysis"),
  EngineeredPlague: require("./EngineeredPlague"),
  Firebolt: require("./Firebolt"),
  ForceSpike: require("./ForceSpike"),
  GerrardsVerdict: require("./GerrardsVerdict"),
  GoblinLegionnaire: require("./GoblinLegionnaire"),
  GoblinRingleader: require("./GoblinRingleader"),
  RoaroftheWurm: require("./RoaroftheWurm"),
  WingShards: require("./WingShards"),
  Wonder: require("./Wonder")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setF07 = module.exports;}