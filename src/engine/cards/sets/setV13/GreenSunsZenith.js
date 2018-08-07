"use strict";
const Constants = require ("../../../Constants");
const GreenSunsZenithBase = require("../setEMA/GreenSunsZenith");

class GreenSunsZenith extends GreenSunsZenithBase {
  constructor (game) {
    super(game, "Green Sun's Zenith", "From the Vault: Twenty", "V13");
  }
}

module.exports = GreenSunsZenith;
