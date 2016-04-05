"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Take extends UnimplementedCard {
  constructor(game) {
    super(game, "Take", "Dragon's Maze", "DGM");
  }
}

module.exports = Take;
