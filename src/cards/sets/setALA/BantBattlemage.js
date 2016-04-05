"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantBattlemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Bant Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = BantBattlemage;
