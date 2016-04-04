"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightguardPatrol extends Card {
  constructor(game) {
    super(game, "Nightguard Patrol", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NightguardPatrol;
