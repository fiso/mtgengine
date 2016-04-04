"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StunSniper extends Card {
  constructor(game) {
    super(game, "Stun Sniper", "Alara Reborn", "ARB");
  }
}

module.exports = StunSniper;
