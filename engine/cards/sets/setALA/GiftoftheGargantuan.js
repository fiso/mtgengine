"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftoftheGargantuan extends UnimplementedCard {
  constructor(game) {
    super(game, "Gift of the Gargantuan", "Shards of Alara", "ALA");
  }
}

module.exports = GiftoftheGargantuan;
