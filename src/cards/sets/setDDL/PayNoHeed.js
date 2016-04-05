"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PayNoHeed extends UnimplementedCard {
  constructor(game) {
    super(game, "Pay No Heed", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = PayNoHeed;
