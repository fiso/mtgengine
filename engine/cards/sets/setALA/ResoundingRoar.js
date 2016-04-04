"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResoundingRoar extends Card {
  constructor(game) {
    super(game, "Resounding Roar", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingRoar;
