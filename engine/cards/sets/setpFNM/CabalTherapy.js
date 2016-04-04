"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalTherapy extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Therapy", "Friday Night Magic", "pFNM");
  }
}

module.exports = CabalTherapy;
