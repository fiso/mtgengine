"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blood extends Card {
  constructor(game) {
    super(game, "Blood", "Dragon's Maze", "DGM");
  }
}

module.exports = Blood;
