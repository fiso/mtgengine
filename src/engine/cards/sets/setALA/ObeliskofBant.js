"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObeliskofBant extends UnimplementedCard {
  constructor (game) {
    super(game, "Obelisk of Bant", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofBant;
