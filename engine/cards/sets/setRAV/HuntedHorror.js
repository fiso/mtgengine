"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedHorror extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunted Horror", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedHorror;
