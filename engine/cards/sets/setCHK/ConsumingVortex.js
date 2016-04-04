"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumingVortex extends Card {
  constructor(game) {
    super(game, "Consuming Vortex", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ConsumingVortex;
