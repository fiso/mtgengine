"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Armed extends Card {
  constructor(game) {
    super(game, "Armed", "Dragon's Maze", "DGM");
  }
}

module.exports = Armed;
