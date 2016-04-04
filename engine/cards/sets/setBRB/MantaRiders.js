"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MantaRiders extends Card {
  constructor(game) {
    super(game, "Manta Riders", "Battle Royale Box Set", "BRB");
  }
}

module.exports = MantaRiders;
