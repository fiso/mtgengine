"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicBane extends UnimplementedCard {
  constructor (game) {
    super(game, "Relic Bane", "Mirrodin", "MRD");
  }
}

module.exports = RelicBane;
