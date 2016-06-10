"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarleadersHelix extends UnimplementedCard {
  constructor (game) {
    super(game, "Warleader's Helix", "Dragon's Maze", "DGM");
  }
}

module.exports = WarleadersHelix;
