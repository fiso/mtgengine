"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViolentUltimatum extends UnimplementedCard {
  constructor(game) {
    super(game, "Violent Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = ViolentUltimatum;
