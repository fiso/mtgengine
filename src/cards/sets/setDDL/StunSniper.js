"use strict";
const Constants = require ("../../../Constants");
const StunSniperBase = require("../setARB/StunSniper");

class StunSniper extends StunSniperBase {
  constructor (game) {
    super(game, "Stun Sniper", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = StunSniper;
