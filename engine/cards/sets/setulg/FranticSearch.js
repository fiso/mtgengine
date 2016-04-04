"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FranticSearch extends Card {
  constructor(game) {
    super(game, "Frantic Search", "Urza's Legacy", "ULG");
  }
}

module.exports = FranticSearch;
