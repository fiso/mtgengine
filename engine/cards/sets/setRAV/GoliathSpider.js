"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoliathSpider extends Card {
  constructor(game) {
    super(game, "Goliath Spider", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GoliathSpider;
