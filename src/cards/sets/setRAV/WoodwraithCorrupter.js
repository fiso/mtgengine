"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodwraithCorrupter extends UnimplementedCard {
  constructor(game) {
    super(game, "Woodwraith Corrupter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WoodwraithCorrupter;
