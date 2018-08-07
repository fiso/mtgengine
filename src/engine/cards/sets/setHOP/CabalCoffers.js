"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalCoffers extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Coffers", "Planechase", "HOP");
  }
}

module.exports = CabalCoffers;
