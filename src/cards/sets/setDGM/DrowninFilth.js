"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrowninFilth extends UnimplementedCard {
  constructor (game) {
    super(game, "Drown in Filth", "Dragon's Maze", "DGM");
  }
}

module.exports = DrowninFilth;
