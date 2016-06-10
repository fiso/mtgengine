"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CosmicHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Cosmic Horror", "Fourth Edition", "4ED");
  }
}

module.exports = CosmicHorror;
