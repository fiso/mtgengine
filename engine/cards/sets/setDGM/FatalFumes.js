"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatalFumes extends Card {
  constructor(game) {
    super(game, "Fatal Fumes", "Dragon's Maze", "DGM");
  }
}

module.exports = FatalFumes;
