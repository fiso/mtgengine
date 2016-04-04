"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeizetheInitiative extends Card {
  constructor(game) {
    super(game, "Seize the Initiative", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SeizetheInitiative;
