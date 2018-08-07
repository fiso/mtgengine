"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanityGnawers extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanity Gnawers", "Alara Reborn", "ARB");
  }
}

module.exports = SanityGnawers;
