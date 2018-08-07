"use strict";
const Constants = require ("../../../Constants");
const MidnightEntourageBase = require("../setAER/MidnightEntourage");

class MidnightEntourage extends MidnightEntourageBase {
  constructor (game) {
    super(game, "Midnight Entourage", "Aether Revolt Promos", "PAER");
  }
}

module.exports = MidnightEntourage;
