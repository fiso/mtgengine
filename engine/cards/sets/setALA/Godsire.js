"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Godsire extends Card {
  constructor(game) {
    super(game, "Godsire", "Shards of Alara", "ALA");
  }
}

module.exports = Godsire;
