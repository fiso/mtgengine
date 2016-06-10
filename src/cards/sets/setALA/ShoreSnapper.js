"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShoreSnapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Shore Snapper", "Shards of Alara", "ALA");
  }
}

module.exports = ShoreSnapper;
