"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Breaking extends UnimplementedCard {
  constructor(game) {
    super(game, "Breaking", "Dragon's Maze", "DGM");
  }
}

module.exports = Breaking;
