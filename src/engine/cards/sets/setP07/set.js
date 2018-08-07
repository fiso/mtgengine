"use strict";
module.exports = {
  Condemn: require("./Condemn"),
  CruelEdict: require("./CruelEdict"),
  Disenchant: require("./Disenchant"),
  Mortify: require("./Mortify"),
  PsionicBlast: require("./PsionicBlast"),
  Recollect: require("./Recollect"),
  WrathofGod: require("./WrathofGod")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setP07 = module.exports;}