"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbarianRiftcutter extends Card {
  constructor(game) {
    super(game, "Barbarian Riftcutter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BarbarianRiftcutter;
