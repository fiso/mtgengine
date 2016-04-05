"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntheTide extends UnimplementedCard {
  constructor(game) {
    super(game, "Turn the Tide", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TurntheTide;
