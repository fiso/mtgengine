"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlazeFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Glaze Fiend", "Shards of Alara", "ALA");
  }
}

module.exports = GlazeFiend;
