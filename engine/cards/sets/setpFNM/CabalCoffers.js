"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalCoffers extends Card {
  constructor(game) {
    super(game, "Cabal Coffers", "Friday Night Magic", "pFNM");
  }
}

module.exports = CabalCoffers;
