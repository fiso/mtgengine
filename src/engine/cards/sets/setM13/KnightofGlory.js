"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Glory", "Magic 2013", "M13");
  }
}

module.exports = KnightofGlory;
