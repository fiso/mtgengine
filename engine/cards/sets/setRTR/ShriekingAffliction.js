"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShriekingAffliction extends Card {
  constructor(game) {
    super(game, "Shrieking Affliction", "Return to Ravnica", "RTR");
  }
}

module.exports = ShriekingAffliction;
