"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StunSniperBase = require("../setARB/StunSniper.js");

class StunSniper extends StunSniperBase {
  constructor(game) {
    super(game, "Stun Sniper", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = StunSniper;
