"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TortoiseFormation extends UnimplementedCard {
  constructor (game) {
    super(game, "Tortoise Formation", "Shards of Alara", "ALA");
  }
}

module.exports = TortoiseFormation;
