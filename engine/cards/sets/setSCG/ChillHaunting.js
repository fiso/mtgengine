"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChillHaunting extends Card {
  constructor(game) {
    super(game, "Chill Haunting", "Scourge", "SCG");
  }
}

module.exports = ChillHaunting;
