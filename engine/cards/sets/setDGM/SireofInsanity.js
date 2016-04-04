"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SireofInsanity extends UnimplementedCard {
  constructor(game) {
    super(game, "Sire of Insanity", "Dragon's Maze", "DGM");
  }
}

module.exports = SireofInsanity;
