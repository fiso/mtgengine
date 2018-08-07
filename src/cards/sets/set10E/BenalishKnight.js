"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Knight", "Tenth Edition", "10E");
  }
}

module.exports = BenalishKnight;
