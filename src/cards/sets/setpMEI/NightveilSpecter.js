"use strict";
const Constants = require ("../../../Constants");
const NightveilSpecterBase = require("../setGTC/NightveilSpecter");

class NightveilSpecter extends NightveilSpecterBase {
  constructor (game) {
    super(game, "Nightveil Specter", "Media Inserts", "pMEI");
  }
}

module.exports = NightveilSpecter;
