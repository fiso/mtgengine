"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Turn extends UnimplementedCard {
  constructor (game) {
    super(game, "Turn", "Dragon's Maze", "DGM");
  }
}

module.exports = Turn;
