"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalShrine extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Shrine", "Odyssey", "ODY");
  }
}

module.exports = CabalShrine;
