"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DawningPurist extends Card {
  constructor(game) {
    super(game, "Dawning Purist", "Onslaught", "ONS");
  }
}

module.exports = DawningPurist;
