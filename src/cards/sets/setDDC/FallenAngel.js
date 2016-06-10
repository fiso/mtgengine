"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setBTD/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor (game) {
    super(game, "Fallen Angel", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = FallenAngel;
