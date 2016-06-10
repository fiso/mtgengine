"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AscendedLawmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Ascended Lawmage", "Dragon's Maze", "DGM");
  }
}

module.exports = AscendedLawmage;
