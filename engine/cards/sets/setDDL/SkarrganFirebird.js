"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkarrganFirebird extends UnimplementedCard {
  constructor(game) {
    super(game, "Skarrgan Firebird", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SkarrganFirebird;
