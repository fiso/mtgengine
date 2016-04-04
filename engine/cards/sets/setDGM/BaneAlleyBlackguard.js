"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaneAlleyBlackguard extends Card {
  constructor(game) {
    super(game, "Bane Alley Blackguard", "Dragon's Maze", "DGM");
  }
}

module.exports = BaneAlleyBlackguard;
