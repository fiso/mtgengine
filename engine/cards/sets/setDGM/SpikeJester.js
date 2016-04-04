"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeJester extends UnimplementedCard {
  constructor(game) {
    super(game, "Spike Jester", "Dragon's Maze", "DGM");
  }
}

module.exports = SpikeJester;
