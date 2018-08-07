"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReadyWilling extends UnimplementedCard {
  constructor (game) {
    super(game, "Ready // Willing", "Dragon's Maze", "DGM");
  }
}

module.exports = ReadyWilling;
