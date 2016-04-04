"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChanceEncounter extends Card {
  constructor(game) {
    super(game, "Chance Encounter", "Odyssey", "ODY");
  }
}

module.exports = ChanceEncounter;
