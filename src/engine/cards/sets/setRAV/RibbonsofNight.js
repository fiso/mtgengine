"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RibbonsofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Ribbons of Night", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RibbonsofNight;
