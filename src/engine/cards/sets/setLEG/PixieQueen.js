"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PixieQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Pixie Queen", "Legends", "LEG");
  }
}

module.exports = PixieQueen;
