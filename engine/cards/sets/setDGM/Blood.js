"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blood extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood", "Dragon's Maze", "DGM");
  }
}

module.exports = Blood;
