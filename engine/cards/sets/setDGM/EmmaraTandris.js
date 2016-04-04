"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmmaraTandris extends Card {
  constructor(game) {
    super(game, "Emmara Tandris", "Dragon's Maze", "DGM");
  }
}

module.exports = EmmaraTandris;
