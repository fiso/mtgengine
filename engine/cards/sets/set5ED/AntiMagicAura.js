"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AntiMagicAura extends UnimplementedCard {
  constructor(game) {
    super(game, "Anti-Magic Aura", "Fifth Edition", "5ED");
  }
}

module.exports = AntiMagicAura;
