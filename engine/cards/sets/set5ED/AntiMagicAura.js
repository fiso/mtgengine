"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AntiMagicAura extends Card {
  constructor(game) {
    super(game, "Anti-Magic Aura", "Fifth Edition", "5ED");
  }
}

module.exports = AntiMagicAura;
