"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrakewingKrasis extends Card {
  constructor(game) {
    super(game, "Drakewing Krasis", "Gatecrash", "GTC");
  }
}

module.exports = DrakewingKrasis;
