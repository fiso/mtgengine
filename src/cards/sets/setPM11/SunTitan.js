"use strict";
const Constants = require ("../../../Constants");
const SunTitanBase = require("../setCM2/SunTitan");

class SunTitan extends SunTitanBase {
  constructor (game) {
    super(game, "Sun Titan", "Magic 2011 Promos", "PM11");
  }
}

module.exports = SunTitan;
