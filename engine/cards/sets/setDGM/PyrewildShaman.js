"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyrewildShaman extends Card {
  constructor(game) {
    super(game, "Pyrewild Shaman", "Dragon's Maze", "DGM");
  }
}

module.exports = PyrewildShaman;
