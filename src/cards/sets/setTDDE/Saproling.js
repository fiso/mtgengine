"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Duel Decks: Phyrexia vs. the Coalition Tokens", "TDDE");
  }
}

module.exports = Saproling;
