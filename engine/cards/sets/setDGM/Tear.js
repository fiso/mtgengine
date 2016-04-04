"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tear extends Card {
  constructor(game) {
    super(game, "Tear", "Dragon's Maze", "DGM");
  }
}

module.exports = Tear;
