"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Give extends UnimplementedCard {
  constructor (game) {
    super(game, "Give", "Dragon's Maze", "DGM");
  }
}

module.exports = Give;
