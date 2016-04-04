"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostCouncilofOrzhova extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghost Council of Orzhova", "Guildpact", "GPT");
  }
}

module.exports = GhostCouncilofOrzhova;
