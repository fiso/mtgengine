"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsHeadBuzzard extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's-Head Buzzard", "Scourge", "SCG");
  }
}

module.exports = DeathsHeadBuzzard;
