"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReapIntellect extends UnimplementedCard {
  constructor(game) {
    super(game, "Reap Intellect", "Dragon's Maze", "DGM");
  }
}

module.exports = ReapIntellect;
