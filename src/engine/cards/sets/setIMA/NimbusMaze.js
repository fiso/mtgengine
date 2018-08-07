"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbusMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimbus Maze", "Iconic Masters", "IMA");
  }
}

module.exports = NimbusMaze;
