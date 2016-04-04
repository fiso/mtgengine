"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanScoundrel extends Card {
  constructor(game) {
    super(game, "Krovikan Scoundrel", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanScoundrel;
