"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeclarationofNaught extends UnimplementedCard {
  constructor(game) {
    super(game, "Declaration of Naught", "Morningtide", "MOR");
  }
}

module.exports = DeclarationofNaught;
