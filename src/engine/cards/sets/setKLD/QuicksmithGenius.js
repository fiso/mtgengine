"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksmithGenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksmith Genius", "Kaladesh", "KLD");
  }
}

module.exports = QuicksmithGenius;
