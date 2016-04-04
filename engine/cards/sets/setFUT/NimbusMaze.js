"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimbusMaze extends Card {
  constructor(game) {
    super(game, "Nimbus Maze", "Future Sight", "FUT");
  }
}

module.exports = NimbusMaze;
