"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullCollector extends Card {
  constructor(game) {
    super(game, "Skull Collector", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SkullCollector;
