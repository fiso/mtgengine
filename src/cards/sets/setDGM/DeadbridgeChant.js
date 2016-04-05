"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadbridgeChant extends UnimplementedCard {
  constructor(game) {
    super(game, "Deadbridge Chant", "Dragon's Maze", "DGM");
  }
}

module.exports = DeadbridgeChant;
