"use strict";
const Constants = require ("../../../Constants");
const VoltaicKeyBase = require("../setM11/VoltaicKey");

class VoltaicKey extends VoltaicKeyBase {
  constructor (game) {
    super(game, "Voltaic Key", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = VoltaicKey;
