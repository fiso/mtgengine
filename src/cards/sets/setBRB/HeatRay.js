"use strict";
const Constants = require ("../../../Constants");
const HeatRayBase = require("../setIMA/HeatRay");

class HeatRay extends HeatRayBase {
  constructor (game) {
    super(game, "Heat Ray", "Battle Royale Box Set", "BRB");
  }
}

module.exports = HeatRay;
