"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dangerous extends Card {
  constructor(game) {
    super(game, "Dangerous", "Dragon's Maze", "DGM");
  }
}

module.exports = Dangerous;
