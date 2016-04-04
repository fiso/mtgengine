"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalTherapy extends Card {
  constructor(game) {
    super(game, "Cabal Therapy", "Friday Night Magic", "pFNM");
  }
}

module.exports = CabalTherapy;
