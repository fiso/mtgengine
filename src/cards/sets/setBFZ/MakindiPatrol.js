"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakindiPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Makindi Patrol", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MakindiPatrol;
