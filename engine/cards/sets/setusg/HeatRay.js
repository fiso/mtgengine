"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeatRayBase = require("../setBRB/HeatRay.js");

class HeatRay extends HeatRayBase {
  constructor(game) {
    super(game, "Heat Ray", "Urza's Saga", "USG");
  }
}

module.exports = HeatRay;
