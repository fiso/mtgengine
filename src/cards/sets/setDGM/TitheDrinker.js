"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitheDrinker extends UnimplementedCard {
  constructor (game) {
    super(game, "Tithe Drinker", "Dragon's Maze", "DGM");
  }
}

module.exports = TitheDrinker;
