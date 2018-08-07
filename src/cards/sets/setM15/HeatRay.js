"use strict";
const Constants = require ("../../../Constants");
const HeatRayBase = require("../setIMA/HeatRay");

class HeatRay extends HeatRayBase {
  constructor (game) {
    super(game, "Heat Ray", "Magic 2015", "M15");
  }
}

module.exports = HeatRay;
