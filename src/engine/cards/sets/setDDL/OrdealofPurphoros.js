"use strict";
const Constants = require ("../../../Constants");
const OrdealofPurphorosBase = require("../setTHS/OrdealofPurphoros");

class OrdealofPurphoros extends OrdealofPurphorosBase {
  constructor (game) {
    super(game, "Ordeal of Purphoros", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = OrdealofPurphoros;
