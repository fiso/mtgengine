"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamingGambit extends Card {
  constructor(game) {
    super(game, "Flaming Gambit", "Torment", "TOR");
  }
}

module.exports = FlamingGambit;
