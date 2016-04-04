"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StromgaldCabal extends Card {
  constructor(game) {
    super(game, "Stromgald Cabal", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StromgaldCabal;
