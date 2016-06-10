"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxsHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = SphinxsHerald;
