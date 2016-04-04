"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpeciesGorger extends UnimplementedCard {
  constructor(game) {
    super(game, "Species Gorger", "Dragon's Maze", "DGM");
  }
}

module.exports = SpeciesGorger;
