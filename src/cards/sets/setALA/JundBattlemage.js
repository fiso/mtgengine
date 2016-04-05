"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JundBattlemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Jund Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = JundBattlemage;
