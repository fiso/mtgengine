"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndestructibleAura extends UnimplementedCard {
  constructor(game) {
    super(game, "Indestructible Aura", "Chronicles", "CHR");
  }
}

module.exports = IndestructibleAura;
