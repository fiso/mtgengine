"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalCatharUnhallowedCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Cathar // Unhallowed Cathar", "Dark Ascension", "DKA");
  }
}

module.exports = LoyalCatharUnhallowedCathar;
