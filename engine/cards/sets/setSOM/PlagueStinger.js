"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueStinger extends Card {
  constructor(game) {
    super(game, "Plague Stinger", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PlagueStinger;
