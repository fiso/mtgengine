"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KathariScreecher extends Card {
  constructor(game) {
    super(game, "Kathari Screecher", "Shards of Alara", "ALA");
  }
}

module.exports = KathariScreecher;
