"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenSentry extends Card {
  constructor(game) {
    super(game, "Molten Sentry", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoltenSentry;
