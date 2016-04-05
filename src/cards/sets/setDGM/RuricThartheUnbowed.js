"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuricThartheUnbowed extends UnimplementedCard {
  constructor(game) {
    super(game, "Ruric Thar, the Unbowed", "Dragon's Maze", "DGM");
  }
}

module.exports = RuricThartheUnbowed;
