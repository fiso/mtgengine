"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Well extends UnimplementedCard {
  constructor (game) {
    super(game, "Well", "Dragon's Maze", "DGM");
  }
}

module.exports = Well;
