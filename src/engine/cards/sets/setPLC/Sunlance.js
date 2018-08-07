"use strict";
const Constants = require ("../../../Constants");
const SunlanceBase = require("../setMM2/Sunlance");

class Sunlance extends SunlanceBase {
  constructor (game) {
    super(game, "Sunlance", "Planar Chaos", "PLC");
  }
}

module.exports = Sunlance;
