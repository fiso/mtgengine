"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StunSniper extends UnimplementedCard {
  constructor(game) {
    super(game, "Stun Sniper", "Alara Reborn", "ARB");
  }
}

module.exports = StunSniper;
