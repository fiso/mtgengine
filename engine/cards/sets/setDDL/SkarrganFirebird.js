"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkarrganFirebird extends Card {
  constructor(game) {
    super(game, "Skarrgan Firebird", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SkarrganFirebird;
