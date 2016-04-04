"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObeliskofNaya extends Card {
  constructor(game) {
    super(game, "Obelisk of Naya", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofNaya;
