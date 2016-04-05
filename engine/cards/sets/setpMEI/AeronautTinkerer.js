"use strict";
const Constants = require ("../../../Constants");
const AeronautTinkererBase = require("../setM15/AeronautTinkerer");

class AeronautTinkerer extends AeronautTinkererBase {
  constructor(game) {
    super(game, "Aeronaut Tinkerer", "Media Inserts", "pMEI");
  }
}

module.exports = AeronautTinkerer;
