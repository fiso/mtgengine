"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatteringKrasis extends UnimplementedCard {
  constructor (game) {
    super(game, "Battering Krasis", "Dragon's Maze", "DGM");
  }
}

module.exports = BatteringKrasis;
