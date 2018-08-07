"use strict";
const Constants = require ("../../../Constants");
const ShapersSanctuaryBase = require("../setXLN/ShapersSanctuary");

class ShapersSanctuary extends ShapersSanctuaryBase {
  constructor (game) {
    super(game, "Shapers' Sanctuary", "Ixalan Promos", "PXLN");
  }
}

module.exports = ShapersSanctuary;
