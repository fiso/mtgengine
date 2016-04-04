"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FathomMageBase = require("../setGTC/FathomMage.js");

class FathomMage extends FathomMageBase {
  constructor(game) {
    super(game, "Fathom Mage", "Prerelease Events", "pPRE");
  }
}

module.exports = FathomMage;
