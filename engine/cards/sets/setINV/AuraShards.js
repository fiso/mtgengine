"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraShards extends Card {
  constructor(game) {
    super(game, "Aura Shards", "Invasion", "INV");
  }
}

module.exports = AuraShards;
