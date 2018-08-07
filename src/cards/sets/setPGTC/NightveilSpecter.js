"use strict";
const Constants = require ("../../../Constants");
const NightveilSpecterBase = require("../setGTC/NightveilSpecter");

class NightveilSpecter extends NightveilSpecterBase {
  constructor (game) {
    super(game, "Nightveil Specter", "Gatecrash Promos", "PGTC");
  }
}

module.exports = NightveilSpecter;
