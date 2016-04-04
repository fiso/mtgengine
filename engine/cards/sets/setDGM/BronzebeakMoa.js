"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BronzebeakMoa extends Card {
  constructor(game) {
    super(game, "Bronzebeak Moa", "Dragon's Maze", "DGM");
  }
}

module.exports = BronzebeakMoa;
