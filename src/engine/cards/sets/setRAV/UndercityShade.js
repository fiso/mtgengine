"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndercityShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Undercity Shade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = UndercityShade;
