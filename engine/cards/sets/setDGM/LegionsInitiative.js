"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LegionsInitiative extends Card {
  constructor(game) {
    super(game, "Legion's Initiative", "Dragon's Maze", "DGM");
  }
}

module.exports = LegionsInitiative;
