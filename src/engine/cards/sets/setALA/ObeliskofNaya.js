"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObeliskofNaya extends UnimplementedCard {
  constructor (game) {
    super(game, "Obelisk of Naya", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofNaya;
