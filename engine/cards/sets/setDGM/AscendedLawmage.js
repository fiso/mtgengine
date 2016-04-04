"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AscendedLawmage extends Card {
  constructor(game) {
    super(game, "Ascended Lawmage", "Dragon's Maze", "DGM");
  }
}

module.exports = AscendedLawmage;
