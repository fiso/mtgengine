"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Screeching Griffin", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ScreechingGriffin;
