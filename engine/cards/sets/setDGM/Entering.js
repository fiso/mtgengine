"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Entering extends Card {
  constructor(game) {
    super(game, "Entering", "Dragon's Maze", "DGM");
  }
}

module.exports = Entering;
