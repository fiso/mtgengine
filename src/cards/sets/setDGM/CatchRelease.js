"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatchRelease extends UnimplementedCard {
  constructor (game) {
    super(game, "Catch // Release", "Dragon's Maze", "DGM");
  }
}

module.exports = CatchRelease;
