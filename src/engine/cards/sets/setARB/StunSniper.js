"use strict";
const Constants = require ("../../../Constants");
const StunSniperBase = require("../setDDL/StunSniper");

class StunSniper extends StunSniperBase {
  constructor (game) {
    super(game, "Stun Sniper", "Alara Reborn", "ARB");
  }
}

module.exports = StunSniper;
