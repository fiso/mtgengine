"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YourFateIsThriceSealed extends UnimplementedCard {
  constructor(game) {
    super(game, "Your Fate Is Thrice Sealed", "Archenemy", "ARC");
  }
}

module.exports = YourFateIsThriceSealed;
