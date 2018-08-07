"use strict";
const Constants = require ("../../../Constants");
const OonasBlackguardBase = require("../setMOR/OonasBlackguard");

class OonasBlackguard extends OonasBlackguardBase {
  constructor (game) {
    super(game, "Oona's Blackguard", "Gateway 2008", "PG08");
  }
}

module.exports = OonasBlackguard;
