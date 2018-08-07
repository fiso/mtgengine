"use strict";
const Constants = require ("../../../Constants");
const ForsakenSanctuaryBase = require("../setC18/ForsakenSanctuary");

class ForsakenSanctuary extends ForsakenSanctuaryBase {
  constructor (game) {
    super(game, "Forsaken Sanctuary", "Commander 2017", "C17");
  }
}

module.exports = ForsakenSanctuary;
