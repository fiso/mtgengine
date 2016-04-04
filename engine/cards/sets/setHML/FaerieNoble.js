"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieNoble extends Card {
  constructor(game) {
    super(game, "Faerie Noble", "Homelands", "HML");
  }
}

module.exports = FaerieNoble;
