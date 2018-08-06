"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodland Patrol", "Eldritch Moon", "EMN");
  }
}

module.exports = WoodlandPatrol;
