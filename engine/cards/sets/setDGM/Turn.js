"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Turn extends Card {
  constructor(game) {
    super(game, "Turn", "Dragon's Maze", "DGM");
  }
}

module.exports = Turn;
