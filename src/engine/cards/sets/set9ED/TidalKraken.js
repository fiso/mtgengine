"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalKraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Kraken", "Ninth Edition", "9ED");
  }
}

module.exports = TidalKraken;
