"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tear extends UnimplementedCard {
  constructor(game) {
    super(game, "Tear", "Dragon's Maze", "DGM");
  }
}

module.exports = Tear;
