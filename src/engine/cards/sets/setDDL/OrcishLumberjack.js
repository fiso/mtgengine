"use strict";
const Constants = require ("../../../Constants");
const OrcishLumberjackBase = require("../setVMA/OrcishLumberjack");

class OrcishLumberjack extends OrcishLumberjackBase {
  constructor (game) {
    super(game, "Orcish Lumberjack", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = OrcishLumberjack;
