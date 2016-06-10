"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dangerous extends UnimplementedCard {
  constructor (game) {
    super(game, "Dangerous", "Dragon's Maze", "DGM");
  }
}

module.exports = Dangerous;
