"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicGuildgate extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Guildgate", "Commander Anthology", "CMA");
  }
}

module.exports = SimicGuildgate;
