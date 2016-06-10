"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraShards extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura Shards", "Invasion", "INV");
  }
}

module.exports = AuraShards;
