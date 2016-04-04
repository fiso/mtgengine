"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeJester extends Card {
  constructor(game) {
    super(game, "Spike Jester", "Dragon's Maze", "DGM");
  }
}

module.exports = SpikeJester;
