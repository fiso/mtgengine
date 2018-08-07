"use strict";
const Constants = require ("../../../Constants");
const SolarBlastBase = require("../setVMA/SolarBlast");

class SolarBlast extends SolarBlastBase {
  constructor (game) {
    super(game, "Solar Blast", "Onslaught", "ONS");
  }
}

module.exports = SolarBlast;
