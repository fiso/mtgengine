"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Catch extends UnimplementedCard {
  constructor(game) {
    super(game, "Catch", "Dragon's Maze", "DGM");
  }
}

module.exports = Catch;
