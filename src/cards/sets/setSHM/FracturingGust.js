"use strict";
const Constants = require ("../../../Constants");
const FracturingGustBase = require("../setV14/FracturingGust");

class FracturingGust extends FracturingGustBase {
  constructor(game) {
    super(game, "Fracturing Gust", "Shadowmoor", "SHM");
  }
}

module.exports = FracturingGust;
