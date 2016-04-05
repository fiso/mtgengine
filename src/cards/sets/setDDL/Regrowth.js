"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setCED/Regrowth");

class Regrowth extends RegrowthBase {
  constructor(game) {
    super(game, "Regrowth", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Regrowth;
