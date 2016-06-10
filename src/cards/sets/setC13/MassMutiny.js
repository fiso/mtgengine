"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassMutiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Mass Mutiny", "Commander 2013 Edition", "C13");
  }
}

module.exports = MassMutiny;
