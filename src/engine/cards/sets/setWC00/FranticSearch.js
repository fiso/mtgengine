"use strict";
const Constants = require ("../../../Constants");
const FranticSearchBase = require("../setVMA/FranticSearch");

class FranticSearch extends FranticSearchBase {
  constructor (game) {
    super(game, "Frantic Search", "World Championship Decks 2000", "WC00");
  }
}

module.exports = FranticSearch;
