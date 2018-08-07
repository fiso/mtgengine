"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Land Mine", "Magic 2015 Tokens", "TM15");
  }
}

module.exports = LandMine;
