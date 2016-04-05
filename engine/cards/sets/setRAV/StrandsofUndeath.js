"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrandsofUndeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Strands of Undeath", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StrandsofUndeath;
