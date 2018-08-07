"use strict";
const Constants = require ("../../../Constants");
const PhyrexianHulkBase = require("../setTPR/PhyrexianHulk");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor (game) {
    super(game, "Phyrexian Hulk", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianHulk;
