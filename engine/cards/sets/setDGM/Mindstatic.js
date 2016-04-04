"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindstatic extends Card {
  constructor(game) {
    super(game, "Mindstatic", "Dragon's Maze", "DGM");
  }
}

module.exports = Mindstatic;
