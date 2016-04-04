"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EsperCharm extends Card {
  constructor(game) {
    super(game, "Esper Charm", "Shards of Alara", "ALA");
  }
}

module.exports = EsperCharm;
