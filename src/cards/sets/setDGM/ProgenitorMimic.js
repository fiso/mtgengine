"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProgenitorMimic extends UnimplementedCard {
  constructor (game) {
    super(game, "Progenitor Mimic", "Dragon's Maze", "DGM");
  }
}

module.exports = ProgenitorMimic;
