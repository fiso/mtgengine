"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GatherSpecimens extends UnimplementedCard {
  constructor (game) {
    super(game, "Gather Specimens", "Shards of Alara", "ALA");
  }
}

module.exports = GatherSpecimens;
