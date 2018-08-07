"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurmuringPhantasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Murmuring Phantasm", "Dragon's Maze", "DGM");
  }
}

module.exports = MurmuringPhantasm;
