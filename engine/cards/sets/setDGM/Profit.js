"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Profit extends Card {
  constructor(game) {
    super(game, "Profit", "Dragon's Maze", "DGM");
  }
}

module.exports = Profit;
