"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorgueBurst extends Card {
  constructor(game) {
    super(game, "Morgue Burst", "Dragon's Maze", "DGM");
  }
}

module.exports = MorgueBurst;
