"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IndestructibleAuraBase = require("../setCHR/IndestructibleAura.js");

class IndestructibleAura extends IndestructibleAuraBase {
  constructor(game) {
    super(game, "Indestructible Aura", "Legends", "LEG");
  }
}

module.exports = IndestructibleAura;
