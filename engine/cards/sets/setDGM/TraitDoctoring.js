"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TraitDoctoring extends UnimplementedCard {
  constructor(game) {
    super(game, "Trait Doctoring", "Dragon's Maze", "DGM");
  }
}

module.exports = TraitDoctoring;
