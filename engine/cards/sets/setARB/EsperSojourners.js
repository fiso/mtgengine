"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EsperSojourners extends Card {
  constructor(game) {
    super(game, "Esper Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = EsperSojourners;
