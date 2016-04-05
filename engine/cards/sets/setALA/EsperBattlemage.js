"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EsperBattlemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Esper Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = EsperBattlemage;
