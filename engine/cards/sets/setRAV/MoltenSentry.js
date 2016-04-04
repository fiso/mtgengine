"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Molten Sentry", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoltenSentry;
