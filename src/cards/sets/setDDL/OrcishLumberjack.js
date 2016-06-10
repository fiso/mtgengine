"use strict";
const Constants = require ("../../../Constants");
const OrcishLumberjackBase = require("../setCST/OrcishLumberjack");

class OrcishLumberjack extends OrcishLumberjackBase {
  constructor (game) {
    super(game, "Orcish Lumberjack", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = OrcishLumberjack;
