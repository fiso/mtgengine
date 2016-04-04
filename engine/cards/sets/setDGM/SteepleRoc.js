"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteepleRoc extends Card {
  constructor(game) {
    super(game, "Steeple Roc", "Dragon's Maze", "DGM");
  }
}

module.exports = SteepleRoc;
