"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Willing extends UnimplementedCard {
  constructor (game) {
    super(game, "Willing", "Dragon's Maze", "DGM");
  }
}

module.exports = Willing;
