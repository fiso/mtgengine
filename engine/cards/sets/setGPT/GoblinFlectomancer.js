"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinFlectomancer extends Card {
  constructor(game) {
    super(game, "Goblin Flectomancer", "Guildpact", "GPT");
  }
}

module.exports = GoblinFlectomancer;
