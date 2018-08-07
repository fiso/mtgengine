"use strict";
const Constants = require ("../../../Constants");
const SalvageBase = require("../setPZ2/Salvage");

class Salvage extends SalvageBase {
  constructor (game) {
    super(game, "Salvage", "Portal Second Age", "P02");
  }
}

module.exports = Salvage;
