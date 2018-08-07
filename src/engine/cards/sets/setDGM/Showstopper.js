"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Showstopper extends UnimplementedCard {
  constructor (game) {
    super(game, "Showstopper", "Dragon's Maze", "DGM");
  }
}

module.exports = Showstopper;
