"use strict";
const Constants = require ("../../../Constants");
const FencingAceBase = require("../setA25/FencingAce");

class FencingAce extends FencingAceBase {
  constructor (game) {
    super(game, "Fencing Ace", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FencingAce;
