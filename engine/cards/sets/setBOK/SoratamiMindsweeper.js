"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoratamiMindsweeper extends Card {
  constructor(game) {
    super(game, "Soratami Mindsweeper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SoratamiMindsweeper;
