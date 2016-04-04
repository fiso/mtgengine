"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoercivePortal extends Card {
  constructor(game) {
    super(game, "Coercive Portal", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CoercivePortal;
