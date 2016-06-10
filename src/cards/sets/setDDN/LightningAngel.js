"use strict";
const Constants = require ("../../../Constants");
const LightningAngelBase = require("../setAPC/LightningAngel");

class LightningAngel extends LightningAngelBase {
  constructor (game) {
    super(game, "Lightning Angel", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LightningAngel;
