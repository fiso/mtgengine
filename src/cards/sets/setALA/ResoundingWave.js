"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResoundingWave extends UnimplementedCard {
  constructor(game) {
    super(game, "Resounding Wave", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingWave;
