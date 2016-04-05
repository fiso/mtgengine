"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeKrasis extends UnimplementedCard {
  constructor(game) {
    super(game, "Renegade Krasis", "Dragon's Maze", "DGM");
  }
}

module.exports = RenegadeKrasis;
