"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrandsofNight extends Card {
  constructor(game) {
    super(game, "Strands of Night", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StrandsofNight;
