"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Overseer", "Time Spiral", "TSP");
  }
}

module.exports = StrongholdOverseer;
