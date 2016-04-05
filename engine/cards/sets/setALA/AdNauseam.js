"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdNauseam extends UnimplementedCard {
  constructor(game) {
    super(game, "Ad Nauseam", "Shards of Alara", "ALA");
  }
}

module.exports = AdNauseam;
