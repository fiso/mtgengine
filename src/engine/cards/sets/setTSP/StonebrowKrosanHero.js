"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonebrowKrosanHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonebrow, Krosan Hero", "Time Spiral", "TSP");
  }
}

module.exports = StonebrowKrosanHero;
