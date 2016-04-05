"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutriderofJhess extends UnimplementedCard {
  constructor(game) {
    super(game, "Outrider of Jhess", "Shards of Alara", "ALA");
  }
}

module.exports = OutriderofJhess;
