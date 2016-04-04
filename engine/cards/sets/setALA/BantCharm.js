"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BantCharm extends Card {
  constructor(game) {
    super(game, "Bant Charm", "Shards of Alara", "ALA");
  }
}

module.exports = BantCharm;
