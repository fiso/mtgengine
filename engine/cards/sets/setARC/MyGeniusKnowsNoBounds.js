"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyGeniusKnowsNoBounds extends Card {
  constructor(game) {
    super(game, "My Genius Knows No Bounds", "Archenemy", "ARC");
  }
}

module.exports = MyGeniusKnowsNoBounds;
