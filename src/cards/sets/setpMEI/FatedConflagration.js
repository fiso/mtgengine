"use strict";
const Constants = require ("../../../Constants");
const FatedConflagrationBase = require("../setBNG/FatedConflagration");

class FatedConflagration extends FatedConflagrationBase {
  constructor (game) {
    super(game, "Fated Conflagration", "Media Inserts", "pMEI");
  }
}

module.exports = FatedConflagration;
