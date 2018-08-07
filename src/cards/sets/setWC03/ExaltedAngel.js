"use strict";
const Constants = require ("../../../Constants");
const ExaltedAngelBase = require("../setV15/ExaltedAngel");

class ExaltedAngel extends ExaltedAngelBase {
  constructor (game) {
    super(game, "Exalted Angel", "World Championship Decks 2003", "WC03");
  }
}

module.exports = ExaltedAngel;
