"use strict";
const Constants = require ("../../../Constants");
const FallenAngelBase = require("../setBTD/FallenAngel");

class FallenAngel extends FallenAngelBase {
  constructor(game) {
    super(game, "Fallen Angel", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = FallenAngel;
