"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaravanEscortBase = require("../setDDG/CaravanEscort.js");

class CaravanEscort extends CaravanEscortBase {
  constructor(game) {
    super(game, "Caravan Escort", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = CaravanEscort;
