"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArashinCleric extends Card {
  constructor(game) {
    super(game, "Arashin Cleric", "Fate Reforged", "FRF");
  }
}

module.exports = ArashinCleric;
