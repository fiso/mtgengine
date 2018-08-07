"use strict";
const Constants = require ("../../../Constants");
const FungalShamblerBase = require("../setPRM/FungalShambler");

class FungalShambler extends FungalShamblerBase {
  constructor (game) {
    super(game, "Fungal Shambler", "Prerelease Events", "PPRE");
  }
}

module.exports = FungalShambler;
