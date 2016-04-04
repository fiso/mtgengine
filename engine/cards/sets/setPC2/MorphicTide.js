"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorphicTide extends Card {
  constructor(game) {
    super(game, "Morphic Tide", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MorphicTide;
