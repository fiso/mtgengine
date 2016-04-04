"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AkrasanSquire extends Card {
  constructor(game) {
    super(game, "Akrasan Squire", "Shards of Alara", "ALA");
  }
}

module.exports = AkrasanSquire;
