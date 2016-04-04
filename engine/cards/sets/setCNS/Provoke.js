"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Provoke extends Card {
  constructor(game) {
    super(game, "Provoke", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Provoke;
