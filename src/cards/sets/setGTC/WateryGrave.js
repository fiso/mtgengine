"use strict";
const Constants = require ("../../../Constants");
const WateryGraveBase = require("../setEXP/WateryGrave");

class WateryGrave extends WateryGraveBase {
  constructor (game) {
    super(game, "Watery Grave", "Gatecrash", "GTC");
  }
}

module.exports = WateryGrave;
