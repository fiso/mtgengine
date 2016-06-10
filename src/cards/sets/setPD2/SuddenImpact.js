"use strict";
const Constants = require ("../../../Constants");
const SuddenImpactBase = require("../set8ED/SuddenImpact");

class SuddenImpact extends SuddenImpactBase {
  constructor (game) {
    super(game, "Sudden Impact", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = SuddenImpact;
