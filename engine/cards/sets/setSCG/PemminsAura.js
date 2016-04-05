"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PemminsAura extends UnimplementedCard {
  constructor(game) {
    super(game, "Pemmin's Aura", "Scourge", "SCG");
  }
}

module.exports = PemminsAura;
