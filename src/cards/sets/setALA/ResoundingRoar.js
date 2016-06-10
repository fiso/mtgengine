"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResoundingRoar extends UnimplementedCard {
  constructor (game) {
    super(game, "Resounding Roar", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingRoar;
