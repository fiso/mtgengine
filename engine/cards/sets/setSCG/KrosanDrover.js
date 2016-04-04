"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanDrover extends Card {
  constructor(game) {
    super(game, "Krosan Drover", "Scourge", "SCG");
  }
}

module.exports = KrosanDrover;
