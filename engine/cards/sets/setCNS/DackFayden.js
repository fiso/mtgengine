"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DackFayden extends Card {
  constructor(game) {
    super(game, "Dack Fayden", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DackFayden;
