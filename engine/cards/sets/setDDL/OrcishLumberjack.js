"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishLumberjackBase = require("../setCST/OrcishLumberjack.js");

class OrcishLumberjack extends OrcishLumberjackBase {
  constructor(game) {
    super(game, "Orcish Lumberjack", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = OrcishLumberjack;
