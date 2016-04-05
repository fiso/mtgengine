"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofEmbers extends UnimplementedCard {
  constructor(game) {
    super(game, "Rain of Embers", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RainofEmbers;
