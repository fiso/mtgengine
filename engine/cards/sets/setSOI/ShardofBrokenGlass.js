"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShardofBrokenGlass extends Card {
  constructor(game) {
    super(game, "Shard of Broken Glass", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ShardofBrokenGlass;
