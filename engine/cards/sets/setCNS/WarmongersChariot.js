"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarmongersChariot extends UnimplementedCard {
  constructor(game) {
    super(game, "Warmonger's Chariot", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WarmongersChariot;
