"use strict";
const Constants = require ("../../../Constants");
const GauntletsofChaosBase = require("../setCHR/GauntletsofChaos");

class GauntletsofChaos extends GauntletsofChaosBase {
  constructor (game) {
    super(game, "Gauntlets of Chaos", "Masters Edition III", "ME3");
  }
}

module.exports = GauntletsofChaos;
