"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dirty extends UnimplementedCard {
  constructor (game) {
    super(game, "Dirty", "Dragon's Maze", "DGM");
  }
}

module.exports = Dirty;
