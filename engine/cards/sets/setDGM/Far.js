"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Far extends Card {
  constructor(game) {
    super(game, "Far", "Dragon's Maze", "DGM");
  }
}

module.exports = Far;
