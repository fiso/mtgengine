"use strict";
const Constants = require ("../../../Constants");
const WinterOrbBase = require("../setEMA/WinterOrb");

class WinterOrb extends WinterOrbBase {
  constructor (game) {
    super(game, "Winter Orb", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = WinterOrb;
