"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiveTake extends UnimplementedCard {
  constructor (game) {
    super(game, "Give // Take", "Dragon's Maze", "DGM");
  }
}

module.exports = GiveTake;
