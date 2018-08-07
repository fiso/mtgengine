"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalInquisitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Inquisitor", "Odyssey", "ODY");
  }
}

module.exports = CabalInquisitor;
