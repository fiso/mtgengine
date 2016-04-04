"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Catch extends Card {
  constructor(game) {
    super(game, "Catch", "Dragon's Maze", "DGM");
  }
}

module.exports = Catch;
