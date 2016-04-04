"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Well extends Card {
  constructor(game) {
    super(game, "Well", "Dragon's Maze", "DGM");
  }
}

module.exports = Well;
