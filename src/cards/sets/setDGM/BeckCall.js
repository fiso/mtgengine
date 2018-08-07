"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeckCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Beck // Call", "Dragon's Maze", "DGM");
  }
}

module.exports = BeckCall;
