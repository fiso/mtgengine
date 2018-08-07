"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdBiologist extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Biologist", "Nemesis", "NEM");
  }
}

module.exports = StrongholdBiologist;
