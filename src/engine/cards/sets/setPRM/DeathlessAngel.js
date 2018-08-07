"use strict";
const Constants = require ("../../../Constants");
const DeathlessAngelBase = require("../setPROE/DeathlessAngel");

class DeathlessAngel extends DeathlessAngelBase {
  constructor (game) {
    super(game, "Deathless Angel", "Magic Online Promos", "PRM");
  }
}

module.exports = DeathlessAngel;
