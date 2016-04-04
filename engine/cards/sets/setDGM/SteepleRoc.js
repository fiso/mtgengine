"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteepleRoc extends UnimplementedCard {
  constructor(game) {
    super(game, "Steeple Roc", "Dragon's Maze", "DGM");
  }
}

module.exports = SteepleRoc;
