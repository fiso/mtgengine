"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StunSniper extends UnimplementedCard {
  constructor (game) {
    super(game, "Stun Sniper", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = StunSniper;
