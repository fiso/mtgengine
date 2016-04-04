"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Warmth extends Card {
  constructor(game) {
    super(game, "Warmth", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Warmth;
