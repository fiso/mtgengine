"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalFumes extends UnimplementedCard {
  constructor(game) {
    super(game, "Fatal Fumes", "Dragon's Maze", "DGM");
  }
}

module.exports = FatalFumes;
