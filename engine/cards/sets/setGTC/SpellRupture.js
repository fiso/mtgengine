"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellRupture extends UnimplementedCard {
  constructor(game) {
    super(game, "Spell Rupture", "Gatecrash", "GTC");
  }
}

module.exports = SpellRupture;
