"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedCrusher extends Card {
  constructor(game) {
    super(game, "Plated Crusher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PlatedCrusher;
