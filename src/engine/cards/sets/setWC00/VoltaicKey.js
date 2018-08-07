"use strict";
const Constants = require ("../../../Constants");
const VoltaicKeyBase = require("../setM11/VoltaicKey");

class VoltaicKey extends VoltaicKeyBase {
  constructor (game) {
    super(game, "Voltaic Key", "World Championship Decks 2000", "WC00");
  }
}

module.exports = VoltaicKey;
