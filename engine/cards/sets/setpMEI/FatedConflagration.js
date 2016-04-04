"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FatedConflagrationBase = require("../setBNG/FatedConflagration.js");

class FatedConflagration extends FatedConflagrationBase {
  constructor(game) {
    super(game, "Fated Conflagration", "Media Inserts", "pMEI");
  }
}

module.exports = FatedConflagration;
