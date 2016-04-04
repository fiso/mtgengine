"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulsMight extends Card {
  constructor(game) {
    super(game, "Soul's Might", "Shards of Alara", "ALA");
  }
}

module.exports = SoulsMight;
