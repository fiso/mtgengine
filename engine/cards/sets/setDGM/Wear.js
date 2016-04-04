"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wear extends Card {
  constructor(game) {
    super(game, "Wear", "Dragon's Maze", "DGM");
  }
}

module.exports = Wear;
