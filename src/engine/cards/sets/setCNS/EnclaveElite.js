"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnclaveElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Enclave Elite", "Conspiracy", "CNS");
  }
}

module.exports = EnclaveElite;
