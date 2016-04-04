"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdNauseam extends Card {
  constructor(game) {
    super(game, "Ad Nauseam", "Shards of Alara", "ALA");
  }
}

module.exports = AdNauseam;
