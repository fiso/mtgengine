"use strict";
const Constants = require ("../../../Constants");
const FungalShamblerBase = require("../setAPC/FungalShambler");

class FungalShambler extends FungalShamblerBase {
  constructor(game) {
    super(game, "Fungal Shambler", "Prerelease Events", "pPRE");
  }
}

module.exports = FungalShambler;
