"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Trouble extends UnimplementedCard {
  constructor(game) {
    super(game, "Trouble", "Dragon's Maze", "DGM");
  }
}

module.exports = Trouble;
