"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftoftheGargantuan extends Card {
  constructor(game) {
    super(game, "Gift of the Gargantuan", "Shards of Alara", "ALA");
  }
}

module.exports = GiftoftheGargantuan;
