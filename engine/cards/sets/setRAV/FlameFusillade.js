"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameFusillade extends Card {
  constructor(game) {
    super(game, "Flame Fusillade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlameFusillade;
