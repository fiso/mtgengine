"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmedDangerous extends UnimplementedCard {
  constructor (game) {
    super(game, "Armed // Dangerous", "Dragon's Maze", "DGM");
  }
}

module.exports = ArmedDangerous;
