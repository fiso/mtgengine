"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrasisIncubation extends UnimplementedCard {
  constructor (game) {
    super(game, "Krasis Incubation", "Dragon's Maze", "DGM");
  }
}

module.exports = KrasisIncubation;
