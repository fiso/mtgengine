"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksmithSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksmith Spy", "Aether Revolt", "AER");
  }
}

module.exports = QuicksmithSpy;
