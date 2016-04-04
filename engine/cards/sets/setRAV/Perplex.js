"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Perplex extends UnimplementedCard {
  constructor(game) {
    super(game, "Perplex", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Perplex;
