"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatteringKrasis extends Card {
  constructor(game) {
    super(game, "Battering Krasis", "Dragon's Maze", "DGM");
  }
}

module.exports = BatteringKrasis;
