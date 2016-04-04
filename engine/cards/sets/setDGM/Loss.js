"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Loss extends Card {
  constructor(game) {
    super(game, "Loss", "Dragon's Maze", "DGM");
  }
}

module.exports = Loss;
