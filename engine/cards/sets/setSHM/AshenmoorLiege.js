"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshenmoorLiege extends Card {
  constructor(game) {
    super(game, "Ashenmoor Liege", "Shadowmoor", "SHM");
  }
}

module.exports = AshenmoorLiege;
