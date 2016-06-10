"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Maze", "Invasion", "INV");
  }
}

module.exports = ManaMaze;
