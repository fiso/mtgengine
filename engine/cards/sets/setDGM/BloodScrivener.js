"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodScrivener extends Card {
  constructor(game) {
    super(game, "Blood Scrivener", "Dragon's Maze", "DGM");
  }
}

module.exports = BloodScrivener;
