"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dragonshift extends Card {
  constructor(game) {
    super(game, "Dragonshift", "Dragon's Maze", "DGM");
  }
}

module.exports = Dragonshift;
