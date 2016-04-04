"use strict";
const Constants = require ("../../../Constants");
const IndestructibleAuraBase = require("../setCHR/IndestructibleAura");

class IndestructibleAura extends IndestructibleAuraBase {
  constructor(game) {
    super(game, "Indestructible Aura", "Legends", "LEG");
  }
}

module.exports = IndestructibleAura;
