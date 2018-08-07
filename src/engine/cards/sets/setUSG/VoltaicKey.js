"use strict";
const Constants = require ("../../../Constants");
const VoltaicKeyBase = require("../setM11/VoltaicKey");

class VoltaicKey extends VoltaicKeyBase {
  constructor (game) {
    super(game, "Voltaic Key", "Urza's Saga", "USG");
  }
}

module.exports = VoltaicKey;
