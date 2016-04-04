"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FungalShamblerBase = require("../setAPC/FungalShambler.js");

class FungalShambler extends FungalShamblerBase {
  constructor(game) {
    super(game, "Fungal Shambler", "Prerelease Events", "pPRE");
  }
}

module.exports = FungalShambler;
