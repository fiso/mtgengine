"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkrasanSquire extends UnimplementedCard {
  constructor(game) {
    super(game, "Akrasan Squire", "Shards of Alara", "ALA");
  }
}

module.exports = AkrasanSquire;
