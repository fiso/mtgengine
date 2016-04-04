"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunhomeEnforcer extends Card {
  constructor(game) {
    super(game, "Sunhome Enforcer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SunhomeEnforcer;
