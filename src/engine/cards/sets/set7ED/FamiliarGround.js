"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FamiliarGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Familiar Ground", "Seventh Edition", "7ED");
  }
}

module.exports = FamiliarGround;
