"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BantBattlemage extends Card {
  constructor(game) {
    super(game, "Bant Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = BantBattlemage;
