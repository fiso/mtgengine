"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Tolarian Serpent", "Weatherlight", "WTH");
  }
}

module.exports = TolarianSerpent;
