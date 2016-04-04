"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphinxsHerald extends Card {
  constructor(game) {
    super(game, "Sphinx's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = SphinxsHerald;
