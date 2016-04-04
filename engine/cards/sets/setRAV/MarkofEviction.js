"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkofEviction extends Card {
  constructor(game) {
    super(game, "Mark of Eviction", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MarkofEviction;
