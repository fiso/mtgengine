"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MassMutiny extends Card {
  constructor(game) {
    super(game, "Mass Mutiny", "Commander 2013 Edition", "C13");
  }
}

module.exports = MassMutiny;
