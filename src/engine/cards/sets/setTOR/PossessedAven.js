"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossessedAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Possessed Aven", "Torment", "TOR");
  }
}

module.exports = PossessedAven;
