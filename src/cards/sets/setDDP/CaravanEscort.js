"use strict";
const Constants = require ("../../../Constants");
const CaravanEscortBase = require("../setDDG/CaravanEscort");

class CaravanEscort extends CaravanEscortBase {
  constructor (game) {
    super(game, "Caravan Escort", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = CaravanEscort;
