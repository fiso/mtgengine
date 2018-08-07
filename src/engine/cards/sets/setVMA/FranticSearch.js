"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FranticSearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Frantic Search", "Vintage Masters", "VMA");
  }
}

module.exports = FranticSearch;
