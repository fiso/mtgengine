"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbioticBeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Symbiotic Beast", "Onslaught", "ONS");
  }
}

module.exports = SymbioticBeast;
