"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setMTGA/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, "Serra Angel", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = SerraAngel;
