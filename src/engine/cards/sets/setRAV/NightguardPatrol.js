"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightguardPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightguard Patrol", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NightguardPatrol;
