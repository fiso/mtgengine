"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinHaberdasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Haberdasher", "Unstable", "UST");
  }
}

module.exports = GoblinHaberdasher;
