"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Toil extends UnimplementedCard {
  constructor (game) {
    super(game, "Toil", "Dragon's Maze", "DGM");
  }
}

module.exports = Toil;
