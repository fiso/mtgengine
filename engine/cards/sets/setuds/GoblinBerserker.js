"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBerserker extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Berserker", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinBerserker;
