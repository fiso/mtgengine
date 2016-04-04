"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanWumpus extends Card {
  constructor(game) {
    super(game, "Shivan Wumpus", "Planar Chaos", "PLC");
  }
}

module.exports = ShivanWumpus;
