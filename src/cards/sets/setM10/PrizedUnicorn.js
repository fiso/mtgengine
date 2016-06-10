"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrizedUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Prized Unicorn", "Magic 2010", "M10");
  }
}

module.exports = PrizedUnicorn;
