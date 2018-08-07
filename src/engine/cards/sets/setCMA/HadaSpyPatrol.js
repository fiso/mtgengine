"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HadaSpyPatrol extends UnimplementedCard {
  constructor (game) {
    super(game, "Hada Spy Patrol", "Commander Anthology", "CMA");
  }
}

module.exports = HadaSpyPatrol;
