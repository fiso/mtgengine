"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BragosRepresentative extends Card {
  constructor(game) {
    super(game, "Brago's Representative", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BragosRepresentative;
