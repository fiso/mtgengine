"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofInfamy extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Infamy", "Magic 2013", "M13");
  }
}

module.exports = KnightofInfamy;
