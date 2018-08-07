"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrizedUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Prized Unicorn", "Magic Origins", "ORI");
  }
}

module.exports = PrizedUnicorn;
