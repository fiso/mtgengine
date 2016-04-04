"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AeronautTinkerer extends Card {
  constructor(game) {
    super(game, "Aeronaut Tinkerer", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AeronautTinkerer;
