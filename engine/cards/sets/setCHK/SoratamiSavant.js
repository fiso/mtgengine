"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoratamiSavant extends Card {
  constructor(game) {
    super(game, "Soratami Savant", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoratamiSavant;
