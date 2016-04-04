"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShoreSnapper extends Card {
  constructor(game) {
    super(game, "Shore Snapper", "Shards of Alara", "ALA");
  }
}

module.exports = ShoreSnapper;
