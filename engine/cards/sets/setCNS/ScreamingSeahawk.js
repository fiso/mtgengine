"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreamingSeahawk extends Card {
  constructor(game) {
    super(game, "Screaming Seahawk", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ScreamingSeahawk;
