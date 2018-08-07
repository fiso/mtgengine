"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedLammasu extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunted Lammasu", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedLammasu;
