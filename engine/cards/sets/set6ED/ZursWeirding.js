"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZursWeirding extends Card {
  constructor(game) {
    super(game, "Zur's Weirding", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ZursWeirding;
