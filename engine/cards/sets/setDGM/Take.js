"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Take extends Card {
  constructor(game) {
    super(game, "Take", "Dragon's Maze", "DGM");
  }
}

module.exports = Take;
