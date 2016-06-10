"use strict";
const Constants = require ("../../../Constants");
const OonasBlackguardBase = require("../setpGTW/OonasBlackguard");

class OonasBlackguard extends OonasBlackguardBase {
  constructor (game) {
    super(game, "Oona's Blackguard", "Morningtide", "MOR");
  }
}

module.exports = OonasBlackguard;
