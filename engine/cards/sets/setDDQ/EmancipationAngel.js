"use strict";
const Constants = require ("../../../Constants");
const EmancipationAngelBase = require("../setAVR/EmancipationAngel");

class EmancipationAngel extends EmancipationAngelBase {
  constructor(game) {
    super(game, "Emancipation Angel", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = EmancipationAngel;
