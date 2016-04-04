"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoltaicKeyBase = require("../setDDE/VoltaicKey.js");

class VoltaicKey extends VoltaicKeyBase {
  constructor(game) {
    super(game, "Voltaic Key", "Urza's Saga", "USG");
  }
}

module.exports = VoltaicKey;
