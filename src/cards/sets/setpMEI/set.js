"use strict";
module.exports = {
  BlueElementalBlast: require("./BlueElementalBlast"),
  Fireball: require("./Fireball"),
  LightningHounds: require("./LightningHounds"),
  PhyrexianRager: require("./PhyrexianRager"),
  ScentofCinder: require("./ScentofCinder"),
  SilverDrake: require("./SilverDrake"),
  SpinedWurm: require("./SpinedWurm"),
  Warmonger: require("./Warmonger")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPMEI = module.exports;}