"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunhomeEnforcer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunhome Enforcer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SunhomeEnforcer;
