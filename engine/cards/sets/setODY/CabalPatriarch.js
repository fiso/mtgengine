"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalPatriarch extends Card {
  constructor(game) {
    super(game, "Cabal Patriarch", "Odyssey", "ODY");
  }
}

module.exports = CabalPatriarch;
