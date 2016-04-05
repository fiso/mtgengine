"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirHouseGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Dimir House Guard", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirHouseGuard;
