"use strict";
const Constants = require ("../../../Constants");
const ReyaDawnbringerBase = require("../setDD3_DVD/ReyaDawnbringer");

class ReyaDawnbringer extends ReyaDawnbringerBase {
  constructor (game) {
    super(game, "Reya Dawnbringer", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = ReyaDawnbringer;
