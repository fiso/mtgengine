"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Unicorn", "Commander 2018", "C18");
  }
}

module.exports = LoyalUnicorn;
