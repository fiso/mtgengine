"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Far // Away", "Dragon's Maze", "DGM");
  }
}

module.exports = FarAway;
