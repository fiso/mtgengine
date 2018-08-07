"use strict";
const Constants = require ("../../../Constants");
const FatedConflagrationBase = require("../setBNG/FatedConflagration");

class FatedConflagration extends FatedConflagrationBase {
  constructor (game) {
    super(game, "Fated Conflagration", "Magic Online Promos", "PRM");
  }
}

module.exports = FatedConflagration;
