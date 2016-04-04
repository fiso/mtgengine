"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianScout extends Card {
  constructor(game) {
    super(game, "Viridian Scout", "Fifth Dawn", "5DN");
  }
}

module.exports = ViridianScout;
