"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZephyrSpirit extends Card {
  constructor(game) {
    super(game, "Zephyr Spirit", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ZephyrSpirit;
