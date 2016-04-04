"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RollingSpoil extends Card {
  constructor(game) {
    super(game, "Rolling Spoil", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RollingSpoil;
