"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SymbioticBeast extends Card {
  constructor(game) {
    super(game, "Symbiotic Beast", "Onslaught", "ONS");
  }
}

module.exports = SymbioticBeast;
