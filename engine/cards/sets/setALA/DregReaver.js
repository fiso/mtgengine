"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DregReaver extends Card {
  constructor(game) {
    super(game, "Dreg Reaver", "Shards of Alara", "ALA");
  }
}

module.exports = DregReaver;
