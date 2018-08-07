"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CitadelSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Citadel Siege", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CitadelSiege;
