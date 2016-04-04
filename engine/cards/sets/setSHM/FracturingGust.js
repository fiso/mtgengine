"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FracturingGustBase = require("../setV14/FracturingGust.js");

class FracturingGust extends FracturingGustBase {
  constructor(game) {
    super(game, "Fracturing Gust", "Shadowmoor", "SHM");
  }
}

module.exports = FracturingGust;
