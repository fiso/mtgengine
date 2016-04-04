"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CunningLethemancer extends Card {
  constructor(game) {
    super(game, "Cunning Lethemancer", "Shards of Alara", "ALA");
  }
}

module.exports = CunningLethemancer;
