"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnclaveCryptologist extends Card {
  constructor(game) {
    super(game, "Enclave Cryptologist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EnclaveCryptologist;
