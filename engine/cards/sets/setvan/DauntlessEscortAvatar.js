"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessEscortAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Dauntless Escort Avatar", "Vanguard", "VAN");
  }
}

module.exports = DauntlessEscortAvatar;
