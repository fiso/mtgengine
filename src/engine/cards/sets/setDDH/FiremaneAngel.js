"use strict";
const Constants = require ("../../../Constants");
const FiremaneAngelBase = require("../setIMA/FiremaneAngel");

class FiremaneAngel extends FiremaneAngelBase {
  constructor (game) {
    super(game, "Firemane Angel", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = FiremaneAngel;
