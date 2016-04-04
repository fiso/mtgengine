"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindstatic extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindstatic", "Dragon's Maze", "DGM");
  }
}

module.exports = Mindstatic;
