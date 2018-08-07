"use strict";
const Constants = require ("../../../Constants");
const GraypeltRefugeBase = require("../setC17/GraypeltRefuge");

class GraypeltRefuge extends GraypeltRefugeBase {
  constructor (game) {
    super(game, "Graypelt Refuge", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = GraypeltRefuge;
