"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PretendersClaim extends UnimplementedCard {
  constructor (game) {
    super(game, "Pretender's Claim", "Mercadian Masques", "MMQ");
  }
}

module.exports = PretendersClaim;
