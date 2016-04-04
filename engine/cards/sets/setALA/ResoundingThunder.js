"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResoundingThunder extends Card {
  constructor(game) {
    super(game, "Resounding Thunder", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingThunder;
