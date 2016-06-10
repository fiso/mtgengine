"use strict";
const Constants = require ("../../../Constants");
const SolarBlastBase = require("../setONS/SolarBlast");

class SolarBlast extends SolarBlastBase {
  constructor (game) {
    super(game, "Solar Blast", "Vintage Masters", "VMA");
  }
}

module.exports = SolarBlast;
