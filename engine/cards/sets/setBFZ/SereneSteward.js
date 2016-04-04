"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SereneSteward extends Card {
  constructor(game) {
    super(game, "Serene Steward", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SereneSteward;
