"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalSubordinate extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Subordinate", "Commander 2018", "C18");
  }
}

module.exports = LoyalSubordinate;
