"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodScrivener extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Scrivener", "Dragon's Maze", "DGM");
  }
}

module.exports = BloodScrivener;
