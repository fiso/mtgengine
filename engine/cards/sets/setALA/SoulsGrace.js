"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulsGrace extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul's Grace", "Shards of Alara", "ALA");
  }
}

module.exports = SoulsGrace;
