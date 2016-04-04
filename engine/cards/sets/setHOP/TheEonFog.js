"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheEonFog extends Card {
  constructor(game) {
    super(game, "The Eon Fog", "Planechase", "HOP");
  }
}

module.exports = TheEonFog;
