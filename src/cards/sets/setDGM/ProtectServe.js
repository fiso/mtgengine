"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProtectServe extends UnimplementedCard {
  constructor (game) {
    super(game, "Protect // Serve", "Dragon's Maze", "DGM");
  }
}

module.exports = ProtectServe;
