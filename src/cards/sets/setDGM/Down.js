"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Down extends UnimplementedCard {
  constructor (game) {
    super(game, "Down", "Dragon's Maze", "DGM");
  }
}

module.exports = Down;
