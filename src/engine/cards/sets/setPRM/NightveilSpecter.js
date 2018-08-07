"use strict";
const Constants = require ("../../../Constants");
const NightveilSpecterBase = require("../setGTC/NightveilSpecter");

class NightveilSpecter extends NightveilSpecterBase {
  constructor (game) {
    super(game, "Nightveil Specter", "Magic Online Promos", "PRM");
  }
}

module.exports = NightveilSpecter;
