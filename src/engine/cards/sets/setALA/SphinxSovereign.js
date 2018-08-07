"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxSovereign extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx Sovereign", "Shards of Alara", "ALA");
  }
}

module.exports = SphinxSovereign;
