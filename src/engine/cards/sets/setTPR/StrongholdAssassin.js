"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Assassin", "Tempest Remastered", "TPR");
  }
}

module.exports = StrongholdAssassin;
