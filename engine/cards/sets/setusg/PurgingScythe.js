"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PurgingScythe extends Card {
  constructor(game) {
    super(game, "Purging Scythe", "Urza's Saga", "USG");
  }
}

module.exports = PurgingScythe;
