"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Izzet Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = IzzetCluestone;
