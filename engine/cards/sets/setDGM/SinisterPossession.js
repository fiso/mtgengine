"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinisterPossession extends Card {
  constructor(game) {
    super(game, "Sinister Possession", "Dragon's Maze", "DGM");
  }
}

module.exports = SinisterPossession;
