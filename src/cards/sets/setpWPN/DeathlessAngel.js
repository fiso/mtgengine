"use strict";
const Constants = require ("../../../Constants");
const DeathlessAngelBase = require("../setROE/DeathlessAngel");

class DeathlessAngel extends DeathlessAngelBase {
  constructor (game) {
    super(game, "Deathless Angel", "WPN and Gateway", "pWPN");
  }
}

module.exports = DeathlessAngel;
