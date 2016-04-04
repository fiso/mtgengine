"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Willing extends Card {
  constructor(game) {
    super(game, "Willing", "Dragon's Maze", "DGM");
  }
}

module.exports = Willing;
