"use strict";
const Constants = require ("../../../Constants");
const VoltaicKeyBase = require("../setDDE/VoltaicKey");

class VoltaicKey extends VoltaicKeyBase {
  constructor (game) {
    super(game, "Voltaic Key", "Urza's Saga", "USG");
  }
}

module.exports = VoltaicKey;
