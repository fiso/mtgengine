"use strict";
const Constants = require ("../../../Constants");
const MagmaSprayBase = require("../setAKH/MagmaSpray");

class MagmaSpray extends MagmaSprayBase {
  constructor (game) {
    super(game, "Magma Spray", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = MagmaSpray;
