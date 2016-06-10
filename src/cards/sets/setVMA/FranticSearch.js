"use strict";
const Constants = require ("../../../Constants");
const FranticSearchBase = require("../setULG/FranticSearch");

class FranticSearch extends FranticSearchBase {
  constructor (game) {
    super(game, "Frantic Search", "Vintage Masters", "VMA");
  }
}

module.exports = FranticSearch;
