"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeatRayBase = require("../setBRB/HeatRay.js");

class HeatRay extends HeatRayBase {
  constructor(game) {
    super(game, "Heat Ray", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HeatRay;
