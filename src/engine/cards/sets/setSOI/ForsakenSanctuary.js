"use strict";
const Constants = require ("../../../Constants");
const ForsakenSanctuaryBase = require("../setC18/ForsakenSanctuary");

class ForsakenSanctuary extends ForsakenSanctuaryBase {
  constructor (game) {
    super(game, "Forsaken Sanctuary", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForsakenSanctuary;
