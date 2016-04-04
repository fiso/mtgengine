"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptedConscience extends Card {
  constructor(game) {
    super(game, "Corrupted Conscience", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CorruptedConscience;
