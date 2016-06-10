"use strict";
const Constants = require ("../../../Constants");
const HealingSalveBase = require("../setBRB/HealingSalve");

class HealingSalve extends HealingSalveBase {
  constructor (game) {
    super(game, "Healing Salve", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = HealingSalve;
