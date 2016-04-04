"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellRupture extends Card {
  constructor(game) {
    super(game, "Spell Rupture", "Gatecrash", "GTC");
  }
}

module.exports = SpellRupture;
