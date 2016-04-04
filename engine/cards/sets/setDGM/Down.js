"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Down extends Card {
  constructor(game) {
    super(game, "Down", "Dragon's Maze", "DGM");
  }
}

module.exports = Down;
