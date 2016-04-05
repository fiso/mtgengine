"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyGeniusKnowsNoBounds extends UnimplementedCard {
  constructor(game) {
    super(game, "My Genius Knows No Bounds", "Archenemy", "ARC");
  }
}

module.exports = MyGeniusKnowsNoBounds;
