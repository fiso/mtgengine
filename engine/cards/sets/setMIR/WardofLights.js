"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WardofLights extends Card {
  constructor(game) {
    super(game, "Ward of Lights", "Mirage", "MIR");
  }
}

module.exports = WardofLights;
