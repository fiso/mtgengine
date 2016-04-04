"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HypersonicDragonBase = require("../setpPRE/HypersonicDragon.js");

class HypersonicDragon extends HypersonicDragonBase {
  constructor(game) {
    super(game, "Hypersonic Dragon", "Return to Ravnica", "RTR");
  }
}

module.exports = HypersonicDragon;
