"use strict";
const Constants = require ("../../../Constants");
const RegnatheRedeemerBase = require("../setPBBD/RegnatheRedeemer");

class RegnatheRedeemer extends RegnatheRedeemerBase {
  constructor (game) {
    super(game, "Regna, the Redeemer", "Battlebond", "BBD");
  }
}

module.exports = RegnatheRedeemer;
