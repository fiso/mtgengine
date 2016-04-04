"use strict";
const Constants = require ("../../../Constants");
const SoulofRavnicaBase = require("../setM15/SoulofRavnica");

class SoulofRavnica extends SoulofRavnicaBase {
  constructor(game) {
    super(game, "Soul of Ravnica", "Media Inserts", "pMEI");
  }
}

module.exports = SoulofRavnica;
