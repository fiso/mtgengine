"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PayNoHeed extends Card {
  constructor(game) {
    super(game, "Pay No Heed", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = PayNoHeed;
