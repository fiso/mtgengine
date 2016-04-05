"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplatterThug extends UnimplementedCard {
  constructor(game) {
    super(game, "Splatter Thug", "Return to Ravnica", "RTR");
  }
}

module.exports = SplatterThug;
