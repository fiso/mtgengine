"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathlessAngelBase = require("../setROE/DeathlessAngel.js");

class DeathlessAngel extends DeathlessAngelBase {
  constructor(game) {
    super(game, "Deathless Angel", "WPN and Gateway", "pWPN");
  }
}

module.exports = DeathlessAngel;
