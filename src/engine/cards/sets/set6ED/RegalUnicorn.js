"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RegalUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Regal Unicorn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RegalUnicorn;
