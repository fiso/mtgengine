"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CitadelSiege extends Card {
  constructor(game) {
    super(game, "Citadel Siege", "Fate Reforged", "FRF");
  }
}

module.exports = CitadelSiege;
