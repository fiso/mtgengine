"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setMTGA/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, "Serra Angel", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = SerraAngel;
