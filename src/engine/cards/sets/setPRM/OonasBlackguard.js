"use strict";
const Constants = require ("../../../Constants");
const OonasBlackguardBase = require("../setMOR/OonasBlackguard");

class OonasBlackguard extends OonasBlackguardBase {
  constructor (game) {
    super(game, "Oona's Blackguard", "Magic Online Promos", "PRM");
  }
}

module.exports = OonasBlackguard;
