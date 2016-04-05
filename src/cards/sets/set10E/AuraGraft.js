"use strict";
const Constants = require ("../../../Constants");
const AuraGraftBase = require("../setODY/AuraGraft");

class AuraGraft extends AuraGraftBase {
  constructor(game) {
    super(game, "Aura Graft", "Tenth Edition", "10E");
  }
}

module.exports = AuraGraft;
