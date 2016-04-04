"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinewSliver extends Card {
  constructor(game) {
    super(game, "Sinew Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = SinewSliver;
