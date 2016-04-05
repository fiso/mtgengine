"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosCluestone extends UnimplementedCard {
  constructor(game) {
    super(game, "Rakdos Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = RakdosCluestone;
