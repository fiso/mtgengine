"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrashingMossdog extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrashing Mossdog", "Dragon's Maze", "DGM");
  }
}

module.exports = ThrashingMossdog;
