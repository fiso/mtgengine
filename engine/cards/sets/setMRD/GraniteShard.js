"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraniteShard extends Card {
  constructor(game) {
    super(game, "Granite Shard", "Mirrodin", "MRD");
  }
}

module.exports = GraniteShard;
