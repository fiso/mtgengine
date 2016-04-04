"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnclaveElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Enclave Elite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = EnclaveElite;
