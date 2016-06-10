"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FamiliarGround extends UnimplementedCard {
  constructor (game) {
    super(game, "Familiar Ground", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FamiliarGround;
