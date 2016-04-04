"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodwraithStrangler extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodwraith Strangler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WoodwraithStrangler;
