"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnclaveElite extends Card {
  constructor(game) {
    super(game, "Enclave Elite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = EnclaveElite;
