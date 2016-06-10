"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalSurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Surge", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TidalSurge;
