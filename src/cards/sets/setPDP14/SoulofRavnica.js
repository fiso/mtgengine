"use strict";
const Constants = require ("../../../Constants");
const SoulofRavnicaBase = require("../setM15/SoulofRavnica");

class SoulofRavnica extends SoulofRavnicaBase {
  constructor (game) {
    super(game, "Soul of Ravnica", "Duels of the Planeswalkers Promos 2014", "PDP14");
  }
}

module.exports = SoulofRavnica;
