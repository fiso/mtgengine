"use strict";
const Constants = require ("../../../Constants");
const EmperorsVanguardBase = require("../setXLN/EmperorsVanguard");

class EmperorsVanguard extends EmperorsVanguardBase {
  constructor (game) {
    super(game, "Emperor's Vanguard", "Ixalan Promos", "PXLN");
  }
}

module.exports = EmperorsVanguard;
