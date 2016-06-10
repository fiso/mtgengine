"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShardVolley extends UnimplementedCard {
  constructor (game) {
    super(game, "Shard Volley", "Morningtide", "MOR");
  }
}

module.exports = ShardVolley;
