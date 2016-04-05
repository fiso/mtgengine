"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Loss extends UnimplementedCard {
  constructor(game) {
    super(game, "Loss", "Dragon's Maze", "DGM");
  }
}

module.exports = Loss;
