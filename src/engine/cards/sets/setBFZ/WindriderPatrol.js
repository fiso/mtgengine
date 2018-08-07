"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindriderPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Windrider Patrol", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WindriderPatrol;
