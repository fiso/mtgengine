"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinisterPossession extends UnimplementedCard {
  constructor (game) {
    super(game, "Sinister Possession", "Dragon's Maze", "DGM");
  }
}

module.exports = SinisterPossession;
