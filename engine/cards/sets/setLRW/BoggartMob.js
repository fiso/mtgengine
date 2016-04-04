"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartMob extends Card {
  constructor(game) {
    super(game, "Boggart Mob", "Lorwyn", "LRW");
  }
}

module.exports = BoggartMob;
