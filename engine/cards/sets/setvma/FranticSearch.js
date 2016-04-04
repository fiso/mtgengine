"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FranticSearchBase = require("../setULG/FranticSearch.js");

class FranticSearch extends FranticSearchBase {
  constructor(game) {
    super(game, "Frantic Search", "Vintage Masters", "VMA");
  }
}

module.exports = FranticSearch;
