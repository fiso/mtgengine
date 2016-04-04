"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummerBloom extends Card {
  constructor(game) {
    super(game, "Summer Bloom", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SummerBloom;
