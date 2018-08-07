"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Apprentice", "Commander 2018", "C18");
  }
}

module.exports = LoyalApprentice;
