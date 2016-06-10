"use strict";
const Constants = require ("../../../Constants");
const SlateStreetRuffianBase = require("../setDDM/SlateStreetRuffian");

class SlateStreetRuffian extends SlateStreetRuffianBase {
  constructor (game) {
    super(game, "Slate Street Ruffian", "Gatecrash", "GTC");
  }
}

module.exports = SlateStreetRuffian;
