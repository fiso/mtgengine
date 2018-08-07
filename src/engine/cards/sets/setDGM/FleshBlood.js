"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Flesh // Blood", "Dragon's Maze", "DGM");
  }
}

module.exports = FleshBlood;
