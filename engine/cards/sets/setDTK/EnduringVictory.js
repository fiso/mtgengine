"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnduringVictory extends Card {
  constructor(game) {
    super(game, "Enduring Victory", "Dragons of Tarkir", "DTK");
  }
}

module.exports = EnduringVictory;
