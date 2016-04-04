"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dirty extends Card {
  constructor(game) {
    super(game, "Dirty", "Dragon's Maze", "DGM");
  }
}

module.exports = Dirty;
