"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegionsInitiative extends UnimplementedCard {
  constructor(game) {
    super(game, "Legion's Initiative", "Dragon's Maze", "DGM");
  }
}

module.exports = LegionsInitiative;
