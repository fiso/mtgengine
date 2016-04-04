"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenegadeKrasis extends Card {
  constructor(game) {
    super(game, "Renegade Krasis", "Dragon's Maze", "DGM");
  }
}

module.exports = RenegadeKrasis;
