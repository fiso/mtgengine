"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFlectomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Flectomancer", "Guildpact", "GPT");
  }
}

module.exports = GoblinFlectomancer;
