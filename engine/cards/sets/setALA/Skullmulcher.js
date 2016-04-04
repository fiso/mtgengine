"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skullmulcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Skullmulcher", "Shards of Alara", "ALA");
  }
}

module.exports = Skullmulcher;
