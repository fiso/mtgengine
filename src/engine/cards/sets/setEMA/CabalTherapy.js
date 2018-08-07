"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalTherapy extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Therapy", "Eternal Masters", "EMA");
  }
}

module.exports = CabalTherapy;
