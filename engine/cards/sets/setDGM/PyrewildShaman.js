"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyrewildShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyrewild Shaman", "Dragon's Maze", "DGM");
  }
}

module.exports = PyrewildShaman;
