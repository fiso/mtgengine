"use strict";
const Constants = require ("../../../Constants");
const AetherwindBaskerBase = require("../setAER/AetherwindBasker");

class AetherwindBasker extends AetherwindBaskerBase {
  constructor (game) {
    super(game, "Aetherwind Basker", "Aether Revolt Promos", "PAER");
  }
}

module.exports = AetherwindBasker;
