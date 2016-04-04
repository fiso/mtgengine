"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonsHerald extends Card {
  constructor(game) {
    super(game, "Demon's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = DemonsHerald;
