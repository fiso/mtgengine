"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsHeadBuzzard extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's-Head Buzzard", "Masters 25", "A25");
  }
}

module.exports = DeathsHeadBuzzard;
