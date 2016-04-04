"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanityGnawers extends Card {
  constructor(game) {
    super(game, "Sanity Gnawers", "Alara Reborn", "ARB");
  }
}

module.exports = SanityGnawers;
