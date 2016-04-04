"use strict";
const Constants = require ("../../../Constants");
const HeatRayBase = require("../setBRB/HeatRay");

class HeatRay extends HeatRayBase {
  constructor(game) {
    super(game, "Heat Ray", "Urza's Saga", "USG");
  }
}

module.exports = HeatRay;
