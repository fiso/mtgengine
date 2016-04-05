"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmmaraTandris extends UnimplementedCard {
  constructor(game) {
    super(game, "Emmara Tandris", "Dragon's Maze", "DGM");
  }
}

module.exports = EmmaraTandris;
