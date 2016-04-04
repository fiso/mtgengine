"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GatecreeperVineBase = require("../setDDM/GatecreeperVine.js");

class GatecreeperVine extends GatecreeperVineBase {
  constructor(game) {
    super(game, "Gatecreeper Vine", "Return to Ravnica", "RTR");
  }
}

module.exports = GatecreeperVine;
