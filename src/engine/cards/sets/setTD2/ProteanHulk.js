"use strict";
const Constants = require ("../../../Constants");
const ProteanHulkBase = require("../setA25/ProteanHulk");

class ProteanHulk extends ProteanHulkBase {
  constructor (game) {
    super(game, "Protean Hulk", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ProteanHulk;
