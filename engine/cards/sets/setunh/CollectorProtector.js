"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CollectorProtector extends Card {
  constructor(game) {
    super(game, "Collector Protector", "Unhinged", "UNH");
  }
}

module.exports = CollectorProtector;
