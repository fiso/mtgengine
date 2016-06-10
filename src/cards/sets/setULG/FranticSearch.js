"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FranticSearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Frantic Search", "Urza's Legacy", "ULG");
  }
}

module.exports = FranticSearch;
