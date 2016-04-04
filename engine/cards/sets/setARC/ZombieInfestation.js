"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieInfestation extends Card {
  constructor(game) {
    super(game, "Zombie Infestation", "Archenemy", "ARC");
  }
}

module.exports = ZombieInfestation;
