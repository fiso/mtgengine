"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Burn extends Card {
  constructor(game) {
    super(game, "Burn", "Dragon's Maze", "DGM");
  }
}

module.exports = Burn;
