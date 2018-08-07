"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanWumpus extends UnimplementedCard {
  constructor (game) {
    super(game, "Shivan Wumpus", "Planar Chaos", "PLC");
  }
}

module.exports = ShivanWumpus;
