"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GauntletsofChaosBase = require("../setCHR/GauntletsofChaos.js");

class GauntletsofChaos extends GauntletsofChaosBase {
  constructor(game) {
    super(game, "Gauntlets of Chaos", "Masters Edition III", "ME3");
  }
}

module.exports = GauntletsofChaos;
