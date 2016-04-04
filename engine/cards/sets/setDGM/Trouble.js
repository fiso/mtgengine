"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Trouble extends Card {
  constructor(game) {
    super(game, "Trouble", "Dragon's Maze", "DGM");
  }
}

module.exports = Trouble;
