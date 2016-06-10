"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CitadelSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Citadel Siege", "Fate Reforged", "FRF");
  }
}

module.exports = CitadelSiege;
