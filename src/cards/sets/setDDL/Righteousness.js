"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor (game) {
    super(game, "Righteousness", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Righteousness;
