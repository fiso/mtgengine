"use strict";
const Constants = require ("../../../Constants");
const AeronautTinkererBase = require("../setM15/AeronautTinkerer");

class AeronautTinkerer extends AeronautTinkererBase {
  constructor (game) {
    super(game, "Aeronaut Tinkerer", "URL/Convention Promos", "PURL");
  }
}

module.exports = AeronautTinkerer;
