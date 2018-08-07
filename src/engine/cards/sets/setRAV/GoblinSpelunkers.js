"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSpelunkers extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Spelunkers", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GoblinSpelunkers;
