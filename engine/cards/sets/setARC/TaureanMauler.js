"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaureanMauler extends Card {
  constructor(game) {
    super(game, "Taurean Mauler", "Archenemy", "ARC");
  }
}

module.exports = TaureanMauler;
