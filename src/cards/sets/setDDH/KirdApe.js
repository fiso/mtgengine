"use strict";
const Constants = require ("../../../Constants");
const KirdApeBase = require("../setEMA/KirdApe");

class KirdApe extends KirdApeBase {
  constructor (game) {
    super(game, "Kird Ape", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = KirdApe;
