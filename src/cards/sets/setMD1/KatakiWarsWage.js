"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KatakiWarsWage extends UnimplementedCard {
  constructor(game) {
    super(game, "Kataki, War's Wage", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = KatakiWarsWage;
