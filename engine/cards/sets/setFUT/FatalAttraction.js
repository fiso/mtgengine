"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalAttraction extends UnimplementedCard {
  constructor(game) {
    super(game, "Fatal Attraction", "Future Sight", "FUT");
  }
}

module.exports = FatalAttraction;
