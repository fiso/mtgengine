"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Serve extends UnimplementedCard {
  constructor(game) {
    super(game, "Serve", "Dragon's Maze", "DGM");
  }
}

module.exports = Serve;
