"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JundBattlemage extends Card {
  constructor(game) {
    super(game, "Jund Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = JundBattlemage;
