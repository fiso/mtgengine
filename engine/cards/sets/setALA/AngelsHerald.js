"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelsHerald extends Card {
  constructor(game) {
    super(game, "Angel's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = AngelsHerald;
