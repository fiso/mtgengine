"use strict";
const Constants = require ("../../../Constants");
const KnotvinePaladinBase = require("../setARB/KnotvinePaladin");

class KnotvinePaladin extends KnotvinePaladinBase {
  constructor(game) {
    super(game, "Knotvine Paladin", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnotvinePaladin;
