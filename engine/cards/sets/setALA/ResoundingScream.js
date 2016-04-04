"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResoundingScream extends UnimplementedCard {
  constructor(game) {
    super(game, "Resounding Scream", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingScream;
