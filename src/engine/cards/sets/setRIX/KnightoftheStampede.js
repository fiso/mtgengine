"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheStampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the Stampede", "Rivals of Ixalan", "RIX");
  }
}

module.exports = KnightoftheStampede;
