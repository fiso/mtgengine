"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shadowfeed extends Card {
  constructor(game) {
    super(game, "Shadowfeed", "Shards of Alara", "ALA");
  }
}

module.exports = Shadowfeed;
