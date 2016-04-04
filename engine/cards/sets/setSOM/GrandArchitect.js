"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrandArchitect extends Card {
  constructor(game) {
    super(game, "Grand Architect", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GrandArchitect;
