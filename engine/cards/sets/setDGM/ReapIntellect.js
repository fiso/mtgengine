"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReapIntellect extends Card {
  constructor(game) {
    super(game, "Reap Intellect", "Dragon's Maze", "DGM");
  }
}

module.exports = ReapIntellect;
