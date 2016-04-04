"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirHouseGuard extends Card {
  constructor(game) {
    super(game, "Dimir House Guard", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirHouseGuard;
