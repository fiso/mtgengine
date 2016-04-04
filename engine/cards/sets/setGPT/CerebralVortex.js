"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CerebralVortex extends Card {
  constructor(game) {
    super(game, "Cerebral Vortex", "Guildpact", "GPT");
  }
}

module.exports = CerebralVortex;
