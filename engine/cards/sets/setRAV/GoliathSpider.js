"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoliathSpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Goliath Spider", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GoliathSpider;
