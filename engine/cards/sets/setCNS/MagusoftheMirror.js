"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheMirror extends Card {
  constructor(game) {
    super(game, "Magus of the Mirror", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MagusoftheMirror;
