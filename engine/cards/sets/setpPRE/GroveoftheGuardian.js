"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GroveoftheGuardian extends Card {
  constructor(game) {
    super(game, "Grove of the Guardian", "Prerelease Events", "pPRE");
  }
}

module.exports = GroveoftheGuardian;
