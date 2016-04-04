"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostCouncilofOrzhova extends Card {
  constructor(game) {
    super(game, "Ghost Council of Orzhova", "Guildpact", "GPT");
  }
}

module.exports = GhostCouncilofOrzhova;
