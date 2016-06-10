"use strict";
const Constants = require ("../../../Constants");
const FathomMageBase = require("../setGTC/FathomMage");

class FathomMage extends FathomMageBase {
  constructor (game) {
    super(game, "Fathom Mage", "Prerelease Events", "pPRE");
  }
}

module.exports = FathomMage;
