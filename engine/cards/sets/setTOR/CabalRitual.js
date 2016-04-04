"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalRitual extends Card {
  constructor(game) {
    super(game, "Cabal Ritual", "Torment", "TOR");
  }
}

module.exports = CabalRitual;
