"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnclaveCryptologist extends UnimplementedCard {
  constructor (game) {
    super(game, "Enclave Cryptologist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EnclaveCryptologist;
