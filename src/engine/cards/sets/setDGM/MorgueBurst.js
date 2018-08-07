"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorgueBurst extends UnimplementedCard {
  constructor (game) {
    super(game, "Morgue Burst", "Dragon's Maze", "DGM");
  }
}

module.exports = MorgueBurst;
