"use strict";
const Constants = require ("../../../Constants");
const FatedConflagrationBase = require("../setBNG/FatedConflagration");

class FatedConflagration extends FatedConflagrationBase {
  constructor (game) {
    super(game, "Fated Conflagration", "Born of the Gods Promos", "PBNG");
  }
}

module.exports = FatedConflagration;
