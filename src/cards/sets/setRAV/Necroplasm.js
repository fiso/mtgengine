"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necroplasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Necroplasm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Necroplasm;
