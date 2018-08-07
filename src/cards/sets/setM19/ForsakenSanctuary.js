"use strict";
const Constants = require ("../../../Constants");
const ForsakenSanctuaryBase = require("../setC18/ForsakenSanctuary");

class ForsakenSanctuary extends ForsakenSanctuaryBase {
  constructor (game) {
    super(game, "Forsaken Sanctuary", "Core Set 2019", "M19");
  }
}

module.exports = ForsakenSanctuary;
