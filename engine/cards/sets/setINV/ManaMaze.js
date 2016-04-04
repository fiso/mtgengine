"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaMaze extends Card {
  constructor(game) {
    super(game, "Mana Maze", "Invasion", "INV");
  }
}

module.exports = ManaMaze;
