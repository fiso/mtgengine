"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousForays extends UnimplementedCard {
  constructor(game) {
    super(game, "Perilous Forays", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PerilousForays;
