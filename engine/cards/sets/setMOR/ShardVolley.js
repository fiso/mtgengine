"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShardVolley extends Card {
  constructor(game) {
    super(game, "Shard Volley", "Morningtide", "MOR");
  }
}

module.exports = ShardVolley;
