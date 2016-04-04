"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StreetbreakerWurm extends Card {
  constructor(game) {
    super(game, "Streetbreaker Wurm", "Guildpact", "GPT");
  }
}

module.exports = StreetbreakerWurm;
