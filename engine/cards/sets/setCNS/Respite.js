"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Respite extends Card {
  constructor(game) {
    super(game, "Respite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Respite;
