"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephyrSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Zephyr Spirit", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ZephyrSpirit;
