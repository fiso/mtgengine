"use strict";
const Constants = require ("../../../Constants");
const YawgmothsWillBase = require("../setVMA/YawgmothsWill");

class YawgmothsWill extends YawgmothsWillBase {
  constructor (game) {
    super(game, "Yawgmoth's Will", "Magic Online Promos", "PRM");
  }
}

module.exports = YawgmothsWill;
