"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarmongersChariot extends Card {
  constructor(game) {
    super(game, "Warmonger's Chariot", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WarmongersChariot;
