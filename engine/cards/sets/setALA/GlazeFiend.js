"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlazeFiend extends Card {
  constructor(game) {
    super(game, "Glaze Fiend", "Shards of Alara", "ALA");
  }
}

module.exports = GlazeFiend;
