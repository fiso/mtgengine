"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WithstandDeath extends Card {
  constructor(game) {
    super(game, "Withstand Death", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WithstandDeath;
