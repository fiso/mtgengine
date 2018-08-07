"use strict";
const Constants = require ("../../../Constants");
const PlantBase = require("../setTC18/Plant");

class Plant extends PlantBase {
  constructor (game) {
    super(game, "Plant", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Plant;
