"use strict";
const Constants = require ("../../../Constants");
const CitadelSiegeBase = require("../setCM2/CitadelSiege");

class CitadelSiege extends CitadelSiegeBase {
  constructor (game) {
    super(game, "Citadel Siege", "Commander 2016", "C16");
  }
}

module.exports = CitadelSiege;
