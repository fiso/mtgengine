"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeclarationofNaught extends Card {
  constructor(game) {
    super(game, "Declaration of Naught", "Morningtide", "MOR");
  }
}

module.exports = DeclarationofNaught;
