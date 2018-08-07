"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraniteShard extends UnimplementedCard {
  constructor (game) {
    super(game, "Granite Shard", "Mirrodin", "MRD");
  }
}

module.exports = GraniteShard;
