"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalShrine extends Card {
  constructor(game) {
    super(game, "Cabal Shrine", "Odyssey", "ODY");
  }
}

module.exports = CabalShrine;
