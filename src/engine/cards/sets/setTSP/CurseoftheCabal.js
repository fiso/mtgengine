"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseoftheCabal extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of the Cabal", "Time Spiral", "TSP");
  }
}

module.exports = CurseoftheCabal;
