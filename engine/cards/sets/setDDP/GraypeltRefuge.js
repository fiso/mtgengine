"use strict";
const Constants = require ("../../../Constants");
const GraypeltRefugeBase = require("../setARC/GraypeltRefuge");

class GraypeltRefuge extends GraypeltRefugeBase {
  constructor(game) {
    super(game, "Graypelt Refuge", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = GraypeltRefuge;
