"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalCathar extends UnimplementedCard {
  constructor(game) {
    super(game, "Loyal Cathar", "Dark Ascension", "DKA");
  }
}

module.exports = LoyalCathar;
