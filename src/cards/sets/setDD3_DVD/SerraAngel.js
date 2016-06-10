"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setATH/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, "Serra Angel", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerraAngel;
