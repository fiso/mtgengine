"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResoundingWave extends Card {
  constructor(game) {
    super(game, "Resounding Wave", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingWave;
