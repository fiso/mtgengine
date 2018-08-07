"use strict";
const Constants = require ("../../../Constants");
const AntiMagicAuraBase = require("../set5ED/AntiMagicAura");

class AntiMagicAura extends AntiMagicAuraBase {
  constructor (game) {
    super(game, "Anti-Magic Aura", "Legends", "LEG");
  }
}

module.exports = AntiMagicAura;
