"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindwrightMage extends Card {
  constructor(game) {
    super(game, "Windwright Mage", "Shards of Alara", "ALA");
  }
}

module.exports = WindwrightMage;
