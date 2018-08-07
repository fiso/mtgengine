"use strict";
const Constants = require ("../../../Constants");
const BaskingRootwallaBase = require("../setGVL/BaskingRootwalla");

class BaskingRootwalla extends BaskingRootwallaBase {
  constructor (game) {
    super(game, "Basking Rootwalla", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = BaskingRootwalla;
