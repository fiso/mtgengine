"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Give extends Card {
  constructor(game) {
    super(game, "Give", "Dragon's Maze", "DGM");
  }
}

module.exports = Give;
