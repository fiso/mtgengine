"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecromanticThirst extends Card {
  constructor(game) {
    super(game, "Necromantic Thirst", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = NecromanticThirst;
