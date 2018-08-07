"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassMutiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Mass Mutiny", "Explorers of Ixalan", "E02");
  }
}

module.exports = MassMutiny;
