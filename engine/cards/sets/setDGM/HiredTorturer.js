"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiredTorturer extends Card {
  constructor(game) {
    super(game, "Hired Torturer", "Dragon's Maze", "DGM");
  }
}

module.exports = HiredTorturer;
