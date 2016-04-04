"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalPit extends Card {
  constructor(game) {
    super(game, "Cabal Pit", "Odyssey", "ODY");
  }
}

module.exports = CabalPit;
