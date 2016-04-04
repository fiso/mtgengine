"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TideDrifter extends Card {
  constructor(game) {
    super(game, "Tide Drifter", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TideDrifter;
