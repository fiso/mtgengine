"use strict";
const Constants = require ("../../../Constants");
const HeatRayBase = require("../setBRB/HeatRay");

class HeatRay extends HeatRayBase {
  constructor(game) {
    super(game, "Heat Ray", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HeatRay;
