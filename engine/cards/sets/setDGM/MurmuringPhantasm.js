"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurmuringPhantasm extends Card {
  constructor(game) {
    super(game, "Murmuring Phantasm", "Dragon's Maze", "DGM");
  }
}

module.exports = MurmuringPhantasm;
