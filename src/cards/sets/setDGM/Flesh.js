"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flesh extends UnimplementedCard {
  constructor (game) {
    super(game, "Flesh", "Dragon's Maze", "DGM");
  }
}

module.exports = Flesh;
