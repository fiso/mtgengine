"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GatherSpecimens extends Card {
  constructor(game) {
    super(game, "Gather Specimens", "Shards of Alara", "ALA");
  }
}

module.exports = GatherSpecimens;
