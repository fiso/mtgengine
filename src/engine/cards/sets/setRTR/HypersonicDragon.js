"use strict";
const Constants = require ("../../../Constants");
const HypersonicDragonBase = require("../setIMA/HypersonicDragon");

class HypersonicDragon extends HypersonicDragonBase {
  constructor (game) {
    super(game, "Hypersonic Dragon", "Return to Ravnica", "RTR");
  }
}

module.exports = HypersonicDragon;
