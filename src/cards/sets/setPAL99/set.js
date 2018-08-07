"use strict";
module.exports = {
  Forest: require("./Forest"),
  Island: require("./Island"),
  KarnSilverGolem: require("./KarnSilverGolem"),
  Mountain: require("./Mountain"),
  Plains: require("./Plains"),
  PouncingJaguar: require("./PouncingJaguar"),
  Rewind: require("./Rewind"),
  SkitteringSkirge: require("./SkitteringSkirge"),
  Swamp: require("./Swamp")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPAL99 = module.exports;}