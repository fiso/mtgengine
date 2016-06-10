"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalKraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Kraken", "Eighth Edition", "8ED");
  }
}

module.exports = TidalKraken;
