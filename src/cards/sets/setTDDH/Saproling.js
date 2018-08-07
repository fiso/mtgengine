"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Duel Decks: Ajani vs. Nicol Bolas Tokens", "TDDH");
  }
}

module.exports = Saproling;
