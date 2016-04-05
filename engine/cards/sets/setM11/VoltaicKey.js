"use strict";
const Constants = require ("../../../Constants");
const VoltaicKeyBase = require("../setDDE/VoltaicKey");

class VoltaicKey extends VoltaicKeyBase {
  constructor(game) {
    super(game, "Voltaic Key", "Magic 2011", "M11");
  }
}

module.exports = VoltaicKey;
