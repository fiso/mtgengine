"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WinnowerPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Winnower Patrol", "Morningtide", "MOR");
  }
}

module.exports = WinnowerPatrol;
