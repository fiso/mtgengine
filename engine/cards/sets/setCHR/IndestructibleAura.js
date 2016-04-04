"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndestructibleAura extends Card {
  constructor(game) {
    super(game, "Indestructible Aura", "Chronicles", "CHR");
  }
}

module.exports = IndestructibleAura;
