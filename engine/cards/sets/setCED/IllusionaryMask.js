"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllusionaryMask extends Card {
  constructor(game) {
    super(game, "Illusionary Mask", "Collector's Edition", "CED");
  }
}

module.exports = IllusionaryMask;
