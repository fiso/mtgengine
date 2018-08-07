"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbleInnovator extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimble Innovator", "Kaladesh", "KLD");
  }
}

module.exports = NimbleInnovator;
