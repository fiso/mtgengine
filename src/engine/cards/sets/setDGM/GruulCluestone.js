"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Gruul Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = GruulCluestone;
