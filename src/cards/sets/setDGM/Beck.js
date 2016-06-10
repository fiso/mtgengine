"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Beck extends UnimplementedCard {
  constructor (game) {
    super(game, "Beck", "Dragon's Maze", "DGM");
  }
}

module.exports = Beck;
