"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalExecutioner extends Card {
  constructor(game) {
    super(game, "Cabal Executioner", "Onslaught", "ONS");
  }
}

module.exports = CabalExecutioner;
