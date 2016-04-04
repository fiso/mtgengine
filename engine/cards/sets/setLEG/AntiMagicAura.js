"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AntiMagicAuraBase = require("../set5ED/AntiMagicAura.js");

class AntiMagicAura extends AntiMagicAuraBase {
  constructor(game) {
    super(game, "Anti-Magic Aura", "Legends", "LEG");
  }
}

module.exports = AntiMagicAura;
