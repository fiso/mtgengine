"use strict";
const Constants = require ("../../../Constants");
const LightningAngelBase = require("../setV15/LightningAngel");

class LightningAngel extends LightningAngelBase {
  constructor (game) {
    super(game, "Lightning Angel", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LightningAngel;
