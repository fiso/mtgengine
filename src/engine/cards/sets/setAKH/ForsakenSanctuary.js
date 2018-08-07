"use strict";
const Constants = require ("../../../Constants");
const ForsakenSanctuaryBase = require("../setC18/ForsakenSanctuary");

class ForsakenSanctuary extends ForsakenSanctuaryBase {
  constructor (game) {
    super(game, "Forsaken Sanctuary", "Amonkhet", "AKH");
  }
}

module.exports = ForsakenSanctuary;
