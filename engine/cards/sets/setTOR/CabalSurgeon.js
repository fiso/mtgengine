"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalSurgeon extends Card {
  constructor(game) {
    super(game, "Cabal Surgeon", "Torment", "TOR");
  }
}

module.exports = CabalSurgeon;
