"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosBattleshaper extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Battleshaper", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosBattleshaper;
