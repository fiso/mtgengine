"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeatRayBase = require("../setBRB/HeatRay.js");

class HeatRay extends HeatRayBase {
  constructor(game) {
    super(game, "Heat Ray", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HeatRay;
