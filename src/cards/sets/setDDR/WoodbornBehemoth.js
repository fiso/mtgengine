"use strict";
const Constants = require ("../../../Constants");
const WoodbornBehemothBase = require("../setE01/WoodbornBehemoth");

class WoodbornBehemoth extends WoodbornBehemothBase {
  constructor (game) {
    super(game, "Woodborn Behemoth", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = WoodbornBehemoth;
