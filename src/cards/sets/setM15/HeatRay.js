"use strict";
const Constants = require ("../../../Constants");
const HeatRayBase = require("../setBRB/HeatRay");

class HeatRay extends HeatRayBase {
  constructor(game) {
    super(game, "Heat Ray", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HeatRay;
