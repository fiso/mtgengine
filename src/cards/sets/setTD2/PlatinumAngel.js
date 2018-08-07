"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setMPS/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor (game) {
    super(game, "Platinum Angel", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PlatinumAngel;
