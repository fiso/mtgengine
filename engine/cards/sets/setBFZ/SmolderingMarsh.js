"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmolderingMarsh extends Card {
  constructor(game) {
    super(game, "Smoldering Marsh", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SmolderingMarsh;
