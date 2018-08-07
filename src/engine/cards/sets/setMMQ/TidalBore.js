"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalBore extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Bore", "Mercadian Masques", "MMQ");
  }
}

module.exports = TidalBore;
