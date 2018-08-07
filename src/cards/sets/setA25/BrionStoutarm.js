"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrionStoutarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Brion Stoutarm", "Masters 25", "A25");
  }
}

module.exports = BrionStoutarm;
