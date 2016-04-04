"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MendingTouch extends UnimplementedCard {
  constructor(game) {
    super(game, "Mending Touch", "Dragon's Maze", "DGM");
  }
}

module.exports = MendingTouch;
