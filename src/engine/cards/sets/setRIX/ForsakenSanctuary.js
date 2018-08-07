"use strict";
const Constants = require ("../../../Constants");
const ForsakenSanctuaryBase = require("../setC18/ForsakenSanctuary");

class ForsakenSanctuary extends ForsakenSanctuaryBase {
  constructor (game) {
    super(game, "Forsaken Sanctuary", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ForsakenSanctuary;
