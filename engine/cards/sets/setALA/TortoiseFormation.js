"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TortoiseFormation extends Card {
  constructor(game) {
    super(game, "Tortoise Formation", "Shards of Alara", "ALA");
  }
}

module.exports = TortoiseFormation;
