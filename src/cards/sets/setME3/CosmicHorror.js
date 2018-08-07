"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CosmicHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Cosmic Horror", "Masters Edition III", "ME3");
  }
}

module.exports = CosmicHorror;
