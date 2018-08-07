"use strict";
const Constants = require ("../../../Constants");
const KilnFiendBase = require("../setIMA/KilnFiend");

class KilnFiend extends KilnFiendBase {
  constructor (game) {
    super(game, "Kiln Fiend", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = KilnFiend;
