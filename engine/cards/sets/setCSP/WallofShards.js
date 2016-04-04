"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofShards extends Card {
  constructor(game) {
    super(game, "Wall of Shards", "Coldsnap", "CSP");
  }
}

module.exports = WallofShards;
