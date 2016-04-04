"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidewaterMinion extends Card {
  constructor(game) {
    super(game, "Tidewater Minion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TidewaterMinion;
