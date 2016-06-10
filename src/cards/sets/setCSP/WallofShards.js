"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofShards extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Shards", "Coldsnap", "CSP");
  }
}

module.exports = WallofShards;
