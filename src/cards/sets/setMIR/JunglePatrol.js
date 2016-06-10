"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JunglePatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Patrol", "Mirage", "MIR");
  }
}

module.exports = JunglePatrol;
