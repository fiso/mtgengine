"use strict";
const Constants = require ("../../../Constants");
const PolukranosWorldEaterBase = require("../setTHS/PolukranosWorldEater");

class PolukranosWorldEater extends PolukranosWorldEaterBase {
  constructor (game) {
    super(game, "Polukranos, World Eater", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = PolukranosWorldEater;
