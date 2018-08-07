"use strict";
const Constants = require ("../../../Constants");
const CaravanEscortBase = require("../setDDP/CaravanEscort");

class CaravanEscort extends CaravanEscortBase {
  constructor (game) {
    super(game, "Caravan Escort", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CaravanEscort;
