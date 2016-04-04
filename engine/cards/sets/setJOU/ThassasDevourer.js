"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThassasDevourer extends Card {
  constructor(game) {
    super(game, "Thassa's Devourer", "Journey into Nyx", "JOU");
  }
}

module.exports = ThassasDevourer;
