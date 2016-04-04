"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalInquisitor extends Card {
  constructor(game) {
    super(game, "Cabal Inquisitor", "Odyssey", "ODY");
  }
}

module.exports = CabalInquisitor;
