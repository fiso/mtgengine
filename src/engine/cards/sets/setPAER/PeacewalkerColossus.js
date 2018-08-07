"use strict";
const Constants = require ("../../../Constants");
const PeacewalkerColossusBase = require("../setAER/PeacewalkerColossus");

class PeacewalkerColossus extends PeacewalkerColossusBase {
  constructor (game) {
    super(game, "Peacewalker Colossus", "Aether Revolt Promos", "PAER");
  }
}

module.exports = PeacewalkerColossus;
