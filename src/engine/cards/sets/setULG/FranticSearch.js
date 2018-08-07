"use strict";
const Constants = require ("../../../Constants");
const FranticSearchBase = require("../setVMA/FranticSearch");

class FranticSearch extends FranticSearchBase {
  constructor (game) {
    super(game, "Frantic Search", "Urza's Legacy", "ULG");
  }
}

module.exports = FranticSearch;
