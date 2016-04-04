"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoratamiSeer extends Card {
  constructor(game) {
    super(game, "Soratami Seer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoratamiSeer;
