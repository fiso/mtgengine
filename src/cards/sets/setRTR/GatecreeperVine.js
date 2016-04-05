"use strict";
const Constants = require ("../../../Constants");
const GatecreeperVineBase = require("../setDDM/GatecreeperVine");

class GatecreeperVine extends GatecreeperVineBase {
  constructor(game) {
    super(game, "Gatecreeper Vine", "Return to Ravnica", "RTR");
  }
}

module.exports = GatecreeperVine;
