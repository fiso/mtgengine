"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalArchon extends Card {
  constructor(game) {
    super(game, "Cabal Archon", "Onslaught", "ONS");
  }
}

module.exports = CabalArchon;
