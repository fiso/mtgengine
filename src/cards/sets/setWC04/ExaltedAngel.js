"use strict";
const Constants = require ("../../../Constants");
const ExaltedAngelBase = require("../setV15/ExaltedAngel");

class ExaltedAngel extends ExaltedAngelBase {
  constructor (game) {
    super(game, "Exalted Angel", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ExaltedAngel;
