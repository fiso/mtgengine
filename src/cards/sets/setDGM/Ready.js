"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ready extends UnimplementedCard {
  constructor(game) {
    super(game, "Ready", "Dragon's Maze", "DGM");
  }
}

module.exports = Ready;
