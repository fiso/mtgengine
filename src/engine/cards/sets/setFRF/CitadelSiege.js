"use strict";
const Constants = require ("../../../Constants");
const CitadelSiegeBase = require("../setCM2/CitadelSiege");

class CitadelSiege extends CitadelSiegeBase {
  constructor (game) {
    super(game, "Citadel Siege", "Fate Reforged", "FRF");
  }
}

module.exports = CitadelSiege;
