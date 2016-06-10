"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossessedCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Possessed Centaur", "Torment", "TOR");
  }
}

module.exports = PossessedCentaur;
