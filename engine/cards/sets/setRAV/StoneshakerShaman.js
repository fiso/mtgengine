"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneshakerShaman extends Card {
  constructor(game) {
    super(game, "Stoneshaker Shaman", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StoneshakerShaman;
