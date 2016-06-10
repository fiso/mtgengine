"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousAura extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Aura", "Mercadian Masques", "MMQ");
  }
}

module.exports = RighteousAura;
