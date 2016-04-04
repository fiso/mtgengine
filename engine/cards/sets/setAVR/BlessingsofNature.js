"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessingsofNature extends Card {
  constructor(game) {
    super(game, "Blessings of Nature", "Avacyn Restored", "AVR");
  }
}

module.exports = BlessingsofNature;
