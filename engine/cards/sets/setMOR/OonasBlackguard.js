"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OonasBlackguardBase = require("../setpGTW/OonasBlackguard.js");

class OonasBlackguard extends OonasBlackguardBase {
  constructor(game) {
    super(game, "Oona's Blackguard", "Morningtide", "MOR");
  }
}

module.exports = OonasBlackguard;
