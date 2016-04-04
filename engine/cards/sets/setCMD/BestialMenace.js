"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BestialMenace extends Card {
  constructor(game) {
    super(game, "Bestial Menace", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BestialMenace;
