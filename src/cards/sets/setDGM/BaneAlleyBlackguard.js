"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneAlleyBlackguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Bane Alley Blackguard", "Dragon's Maze", "DGM");
  }
}

module.exports = BaneAlleyBlackguard;
