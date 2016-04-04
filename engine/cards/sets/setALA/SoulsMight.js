"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulsMight extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul's Might", "Shards of Alara", "ALA");
  }
}

module.exports = SoulsMight;
