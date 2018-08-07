"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeTournamentGrinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike, Tournament Grinder", "Unstable", "UST");
  }
}

module.exports = SpikeTournamentGrinder;
