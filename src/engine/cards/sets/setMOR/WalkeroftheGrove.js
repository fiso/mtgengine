"use strict";
const Constants = require ("../../../Constants");
const WalkeroftheGroveBase = require("../setDDR/WalkeroftheGrove");

class WalkeroftheGrove extends WalkeroftheGroveBase {
  constructor (game) {
    super(game, "Walker of the Grove", "Morningtide", "MOR");
  }
}

module.exports = WalkeroftheGrove;
