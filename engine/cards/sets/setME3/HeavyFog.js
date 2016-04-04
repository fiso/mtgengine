"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeavyFog extends Card {
  constructor(game) {
    super(game, "Heavy Fog", "Masters Edition III", "ME3");
  }
}

module.exports = HeavyFog;
