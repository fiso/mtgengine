"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MendingTouch extends Card {
  constructor(game) {
    super(game, "Mending Touch", "Dragon's Maze", "DGM");
  }
}

module.exports = MendingTouch;
