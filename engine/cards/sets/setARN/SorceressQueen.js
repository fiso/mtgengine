"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SorceressQueen extends Card {
  constructor(game) {
    super(game, "Sorceress Queen", "Arabian Nights", "ARN");
  }
}

module.exports = SorceressQueen;
