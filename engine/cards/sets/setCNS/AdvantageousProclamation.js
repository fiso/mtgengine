"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdvantageousProclamation extends UnimplementedCard {
  constructor(game) {
    super(game, "Advantageous Proclamation", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AdvantageousProclamation;
