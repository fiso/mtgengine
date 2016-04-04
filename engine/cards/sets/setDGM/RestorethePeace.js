"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestorethePeace extends Card {
  constructor(game) {
    super(game, "Restore the Peace", "Dragon's Maze", "DGM");
  }
}

module.exports = RestorethePeace;
