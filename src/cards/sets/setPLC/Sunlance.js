"use strict";
const Constants = require ("../../../Constants");
const SunlanceBase = require("../setDDO/Sunlance");

class Sunlance extends SunlanceBase {
  constructor (game) {
    super(game, "Sunlance", "Planar Chaos", "PLC");
  }
}

module.exports = Sunlance;
