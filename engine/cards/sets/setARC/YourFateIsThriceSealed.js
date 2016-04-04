"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YourFateIsThriceSealed extends Card {
  constructor(game) {
    super(game, "Your Fate Is Thrice Sealed", "Archenemy", "ARC");
  }
}

module.exports = YourFateIsThriceSealed;
